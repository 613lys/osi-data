from __future__ import annotations

import argparse
import json
import mimetypes
import re
from http.server import ThreadingHTTPServer, BaseHTTPRequestHandler
from pathlib import Path
from typing import Any
from urllib.parse import unquote, urlparse

try:
    import yaml
except ImportError:  # pragma: no cover - snapshots still work as JSON
    yaml = None


SAFE_ID = re.compile(r"[^A-Za-z0-9_.-]+")


def slug(value: str) -> str:
    text = SAFE_ID.sub("-", str(value or "scenario").strip()).strip("-._")
    return text or "scenario"


def read_data_file(path: Path) -> dict[str, Any]:
    if path.suffix.lower() == ".json":
        data = json.loads(path.read_text(encoding="utf-8"))
    elif yaml is not None:
        data = yaml.safe_load(path.read_text(encoding="utf-8")) or {}
    else:
        raise ValueError("YAML scenario files require PyYAML; JSON snapshot files are supported without PyYAML")
    if not isinstance(data, dict):
        raise ValueError(f"Scenario file must contain an object: {path}")
    return data


def write_json_atomic(path: Path, payload: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temp = path.with_suffix(path.suffix + ".tmp")
    temp.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    temp.replace(path)


def write_yaml_atomic(path: Path, payload: dict[str, Any]) -> None:
    if yaml is None:
        write_json_atomic(path.with_suffix(".json"), payload)
        return
    path.parent.mkdir(parents=True, exist_ok=True)
    temp = path.with_suffix(path.suffix + ".tmp")
    temp.write_text(yaml.safe_dump(payload, sort_keys=False, allow_unicode=True), encoding="utf-8")
    temp.replace(path)


class ScenarioStore:
    def __init__(self, root: Path, scenario_dir: str = "knowledge/scenarios") -> None:
        self.root = root.resolve()
        self.scenario_root = (self.root / scenario_dir).resolve()
        self.preset_dir = self.scenario_root / "presets"
        self.snapshot_dir = self.scenario_root / "snapshots"

    def display_path(self, path: Path) -> str:
        try:
            return str(path.resolve().relative_to(self.root)).replace("\\", "/")
        except ValueError:
            return str(path).replace("\\", "/")

    def list_folder(self, folder: Path, kind: str) -> list[dict[str, Any]]:
        rows: list[dict[str, Any]] = []
        if not folder.exists():
            return rows
        for path in sorted(folder.iterdir()):
            if not path.is_file() or path.suffix.lower() not in {".json", ".yaml", ".yml"}:
                continue
            try:
                item = read_data_file(path)
            except Exception as exc:
                item = {"id": path.stem, "name": path.stem, "description": f"Could not parse scenario file: {exc}"}
            item.setdefault("id", path.stem)
            item.setdefault("name", item["id"])
            item["kind"] = kind
            item["source_file"] = self.display_path(path)
            rows.append(item)
        return rows

    def list_all(self) -> dict[str, Any]:
        return {
            "presets": self.list_folder(self.preset_dir, "preset"),
            "snapshots": self.list_folder(self.snapshot_dir, "snapshot"),
            "storage": self.display_path(self.scenario_root),
        }

    def scenario_path(self, folder: Path, scenario_id: str, suffix: str) -> Path:
        clean = slug(scenario_id)
        path = (folder / f"{clean}{suffix}").resolve()
        if folder.resolve() not in path.parents and path != folder.resolve():
            raise ValueError("Invalid scenario id")
        return path

    def preset_path(self, scenario_id: str) -> Path:
        return self.scenario_path(self.preset_dir, scenario_id, ".yaml" if yaml is not None else ".json")

    def snapshot_path(self, scenario_id: str) -> Path:
        return self.scenario_path(self.snapshot_dir, scenario_id, ".json")

    def save_preset(self, payload: dict[str, Any]) -> dict[str, Any]:
        if not isinstance(payload, dict):
            raise ValueError("Preset payload must be an object")
        scenario_id = slug(str(payload.get("id") or payload.get("name") or "scenario-template"))
        payload = dict(payload)
        payload["id"] = scenario_id
        payload["kind"] = "preset"
        payload.setdefault("name", scenario_id)
        path = self.preset_path(scenario_id)
        write_yaml_atomic(path, payload)
        payload["source_file"] = self.display_path(path)
        return payload

    def save_snapshot(self, payload: dict[str, Any]) -> dict[str, Any]:
        if not isinstance(payload, dict):
            raise ValueError("Snapshot payload must be an object")
        scenario_id = slug(str(payload.get("id") or payload.get("name") or "scenario"))
        payload = dict(payload)
        payload["id"] = scenario_id
        payload["kind"] = "snapshot"
        payload.setdefault("name", scenario_id)
        path = self.snapshot_path(scenario_id)
        write_json_atomic(path, payload)
        payload["source_file"] = self.display_path(path)
        return payload

    def delete_preset(self, scenario_id: str) -> bool:
        deleted = False
        for suffix in (".yaml", ".yml", ".json"):
            path = self.scenario_path(self.preset_dir, scenario_id, suffix)
            if path.exists():
                path.unlink()
                deleted = True
        return deleted

    def delete_snapshot(self, scenario_id: str) -> bool:
        path = self.snapshot_path(scenario_id)
        if path.exists():
            path.unlink()
            return True
        return False


class OsiUiHandler(BaseHTTPRequestHandler):
    server_version = "OsiUiScenarioServer/1.0"

    def do_GET(self) -> None:  # noqa: N802 - stdlib hook
        parsed = urlparse(self.path)
        if parsed.path == "/api/scenarios":
            self.send_json(self.server.store.list_all())
            return
        self.serve_static(parsed.path)

    def do_POST(self) -> None:  # noqa: N802 - stdlib hook
        parsed = urlparse(self.path)
        if parsed.path == "/api/scenarios/presets":
            try:
                payload = self.read_json_body()
                scenario = self.server.store.save_preset(payload)
                self.send_json({"scenario": scenario})
            except Exception as exc:
                self.send_json({"error": str(exc)}, status=400)
            return
        if parsed.path == "/api/scenarios/snapshots":
            try:
                payload = self.read_json_body()
                scenario = self.server.store.save_snapshot(payload)
                self.send_json({"scenario": scenario})
            except Exception as exc:
                self.send_json({"error": str(exc)}, status=400)
            return
        self.send_json({"error": "Not found"}, status=404)

    def do_DELETE(self) -> None:  # noqa: N802 - stdlib hook
        parsed = urlparse(self.path)
        routes = (
            ("/api/scenarios/presets/", self.server.store.delete_preset),
            ("/api/scenarios/snapshots/", self.server.store.delete_snapshot),
        )
        for prefix, delete_item in routes:
            if parsed.path.startswith(prefix):
                scenario_id = unquote(parsed.path[len(prefix):])
                deleted = delete_item(scenario_id)
                self.send_json({"deleted": deleted})
                return
        self.send_json({"error": "Not found"}, status=404)

    def read_json_body(self) -> dict[str, Any]:
        length = int(self.headers.get("Content-Length") or "0")
        raw = self.rfile.read(length).decode("utf-8") if length else "{}"
        data = json.loads(raw or "{}")
        if not isinstance(data, dict):
            raise ValueError("JSON body must be an object")
        return data

    def send_json(self, payload: Any, status: int = 200) -> None:
        body = json.dumps(payload, ensure_ascii=False, indent=2).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def serve_static(self, path_text: str) -> None:
        path_text = "/index.html" if path_text in {"", "/"} else path_text
        relative = unquote(path_text.lstrip("/"))
        target = (self.server.frontend_dir / relative).resolve()
        frontend = self.server.frontend_dir.resolve()
        if frontend not in target.parents and target != frontend:
            self.send_error(403)
            return
        if target.is_dir():
            target = target / "index.html"
        if not target.exists() or not target.is_file():
            self.send_error(404)
            return
        content_type = mimetypes.guess_type(str(target))[0] or "application/octet-stream"
        body = target.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, format: str, *args: Any) -> None:
        print(f"{self.address_string()} - {format % args}")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Serve the OSI static UI and persist graph scenario templates and view snapshots to local files.")
    parser.add_argument("--root", default=".", help="Scenario root containing frontend/ and knowledge/scenarios/.")
    parser.add_argument("--frontend-dir", default="frontend", help="Frontend directory relative to --root.")
    parser.add_argument("--scenario-dir", default="knowledge/scenarios", help="Scenario library directory relative to --root.")
    parser.add_argument("--host", default="127.0.0.1", help="Bind host.")
    parser.add_argument("--port", type=int, default=8766, help="Bind port.")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    root = Path(args.root).resolve()
    frontend_dir = (root / args.frontend_dir).resolve()
    if not frontend_dir.exists():
        raise SystemExit(f"Frontend directory not found: {frontend_dir}")
    server = ThreadingHTTPServer((args.host, args.port), OsiUiHandler)
    server.frontend_dir = frontend_dir  # type: ignore[attr-defined]
    server.store = ScenarioStore(root, args.scenario_dir)  # type: ignore[attr-defined]
    url = f"http://{args.host}:{args.port}/index.html"
    print(f"Serving OSI UI at {url}")
    print(f"Scenario files: {server.store.display_path(server.store.scenario_root)}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("Stopping server")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()

