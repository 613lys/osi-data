param(
  [string]$Python = "python"
)

$ErrorActionPreference = "Stop"

$RepoRoot = Split-Path -Parent $PSScriptRoot
$DemoRoot = Join-Path $RepoRoot "demo\loan"
$SkillRoot = Join-Path $RepoRoot "skill\osi-kg-ui"
$FragmentRoot = Join-Path $DemoRoot "raw\fragments"
$ComposedRaw = Join-Path $DemoRoot "raw\loan-exposure-source.composed.yaml"

& $Python `
  (Join-Path $SkillRoot "scripts\compose_source_fragments.py") `
  --fragments $FragmentRoot `
  --output $ComposedRaw

& $Python `
  (Join-Path $SkillRoot "scripts\generate_osi_yaml.py") `
  --raw $ComposedRaw `
  --output (Join-Path $DemoRoot "knowledge\regulatory-reporting-osi.yaml") `
  --app-output (Join-Path $DemoRoot "knowledge\regulatory-reporting-app.yaml")

& $Python `
  (Join-Path $SkillRoot "scripts\build_osi_graph.py") `
  --root $DemoRoot `
  --source "knowledge\regulatory-reporting-osi.yaml" `
  --app-metadata "knowledge\regulatory-reporting-app.yaml" `
  --copy-frontend-template `
  --overwrite-template

node --check (Join-Path $DemoRoot "frontend\app.js")

Write-Host "Built loan demo:"
Write-Host (Join-Path $DemoRoot "frontend\index.html")
