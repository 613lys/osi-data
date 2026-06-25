param(
  [string]$Python = "python"
)

$ErrorActionPreference = "Stop"

$RepoRoot = Split-Path -Parent $PSScriptRoot
$DemoRoot = Join-Path $RepoRoot "demo\collateral"
$SkillRoot = Join-Path $RepoRoot "skill\osi-kg-ui"

& $Python `
  (Join-Path $DemoRoot "scripts\generate_osi_yaml.py") `
  --raw (Join-Path $DemoRoot "raw\collateral-margin-source.yaml") `
  --output (Join-Path $DemoRoot "knowledge\regulatory-reporting-osi.yaml")

& $Python `
  (Join-Path $SkillRoot "scripts\build_osi_graph.py") `
  --root $DemoRoot `
  --source "knowledge\regulatory-reporting-osi.yaml" `
  --copy-frontend-template `
  --overwrite-template

node --check (Join-Path $DemoRoot "frontend\app.js")

Write-Host "Built collateral demo:"
Write-Host (Join-Path $DemoRoot "frontend\index.html")
