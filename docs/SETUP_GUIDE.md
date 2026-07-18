# Setup Guide: Scanning This Repo with GHAS + SonarQube

This guide walks through getting this repository onto GitHub and running full
GitHub Advanced Security (GHAS) and SonarQube scans against it.

## 1. Prerequisites

- A GitHub account with a plan that supports GHAS (GHAS is included free for
  public repos; private repos need GitHub Enterprise + GHAS license, or you can
  simply make this test repo **public** since it contains no real secrets).
- Repo admin permissions (to change security settings).
- A SonarQube server (self-hosted) **or** a SonarCloud account (hosted, free for
  public repos) and a generated token.
- Git installed locally.

## 2. Create the GitHub repository

1. On GitHub, create a **new empty repository** (no README/license/gitignore —
   we already have those). Note the HTTPS/SSH URL.
2. Locally, unzip the provided archive and initialize git:
   ```bash
   cd vuln-test-repo
   git init
   git add .
   git commit -m "Initial commit: intentionally vulnerable test repository"
   git branch -M main
   git remote add origin <YOUR_REPO_URL>
   ```

## 3. Handle GitHub push protection on the first push

This repo intentionally includes fake secrets (AWS keys, GitHub tokens, Stripe
keys, a fake RSA private key, etc.) in `config/secrets.env`, `Dockerfile`,
`terraform/main.tf`, and source files. If your organization has **secret scanning
push protection** enabled, GitHub will reject the push and show you exactly which
pattern it detected.

You have two options:

**Option A (recommended) — allow the push once:**
When the push is blocked, GitHub prints a URL per detected secret. Open each URL
and choose "Allow secret" (or "It's a test/fake value"), since all values here are
dummy/example values. Then re-run `git push`.

**Option B — temporarily disable push protection:**
Repo → Settings → Code security and analysis → Secret scanning → Push protection
→ toggle off, push, then turn it back on so future scans still function normally
going forward. Push protection blocks *pushes*, not the scanner itself — turning
it off doesn't disable secret scanning/alerting.

Either way, after the push lands, go to the **Security** tab → **Secret scanning**
to see the full list of detected secrets as alerts.

## 4. Enable GitHub Advanced Security features

Go to **Settings → Code security and analysis** and enable:
- ✅ Dependency graph
- ✅ Dependabot alerts
- ✅ Dependabot security updates (optional — you may want to leave this **off**
  so the intentionally vulnerable dependency versions aren't auto-patched before
  you finish testing)
- ✅ Secret scanning
- ✅ Push protection
- ✅ Code scanning (CodeQL) — this repo already ships
  `.github/workflows/codeql-analysis.yml`, so once Actions run, results populate
  automatically.

## 5. Run the CodeQL scan

The workflow at `.github/workflows/codeql-analysis.yml` runs automatically on
push/PR to `main`/`develop` and covers JavaScript/TypeScript, Python, and Go.

To trigger it manually the first time:
```bash
git push -u origin main
```
Then go to **Actions** tab → watch the "CodeQL Advanced Security Scan" run.
Results appear under **Security → Code scanning alerts** once complete
(typically 3–8 minutes for a repo this size).

## 6. Set up SonarQube / SonarCloud

1. In SonarQube/SonarCloud, create a new project matching `sonar.projectKey` in
   `sonar-project.properties` (`vuln-test-repo`), and generate a token.
2. In your GitHub repo, go to **Settings → Secrets and variables → Actions** and
   add two repository secrets:
   - `SONAR_TOKEN` — the token you generated
   - `SONAR_HOST_URL` — your SonarQube server URL (e.g. `https://sonarcloud.io`
     or your self-hosted URL)
3. The workflow at `.github/workflows/sonarqube.yml` will run on the next push
   and upload results, including a Quality Gate check.
4. View results in your SonarQube project dashboard: Bugs, Vulnerabilities,
   Code Smells, Security Hotspots, and Technical Debt.

## 7. What to expect / how to score efficacy

Use `docs/SECURITY_NOTES.md` as an answer key. For each tool, record:
- **True positives**: issues correctly flagged, matched against the inventory.
- **False negatives**: issues in the inventory the tool missed.
- **False positives**: anything flagged that isn't in the inventory (useful for
  measuring noise/signal ratio).

Suggested comparison matrix:

| Category | GHAS CodeQL | GHAS Secret Scanning | GHAS Dependency/Dependabot | SonarQube |
|---|---|---|---|---|
| SQL Injection | | n/a | n/a | |
| Command Injection | | n/a | n/a | |
| XSS | | n/a | n/a | |
| Hardcoded secrets | n/a | | n/a | (Security Hotspots) |
| Insecure deserialization | | n/a | n/a | |
| Weak crypto | | n/a | n/a | |
| Vulnerable dependencies | n/a | n/a | | (limited) |
| IaC misconfig (Terraform/Docker) | (partial) | n/a | n/a | (if IaC plugin enabled) |
| Code smells / maintainability | n/a | n/a | n/a | |

## 8. Cleanup / re-running

To re-test after making changes, just commit and push again — both workflows
are triggered on every push to `main`/`develop` and on pull requests.

To reset dependency scanning results, you can bump versions in `package.json`,
`requirements.txt`, or `go.mod` and re-push to confirm alerts clear.
