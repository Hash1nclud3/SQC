# Vulnerable Test Repository (GHAS / SonarQube Scanner Efficacy Testing)

> ⚠️ **This repository is intentionally insecure.** Every vulnerability, hardcoded
> secret, outdated dependency, and code-quality issue in this codebase was added
> **on purpose** to evaluate the detection coverage of GitHub Advanced Security
> (CodeQL, secret scanning, dependency/Dependabot alerts) and SonarQube.
>
> **Do not deploy this application anywhere. Do not reuse this code. Do not use
> real credentials in place of the fake ones provided.**

## What's in here

| Layer | Tech | Location |
|---|---|---|
| Infrastructure & CI/CD | Dockerfile, docker-compose, Terraform, GitHub Actions | `Dockerfile`, `docker-compose.yml`, `terraform/`, `.github/workflows/` |
| Backend API & Logic | Node.js/Express, Python/Flask, Go/Gin | `backend/node/`, `backend/python/`, `backend/go/` |
| Frontend & UI | React (JSX/TSX), CSS, HTML | `frontend/` |
| Documentation | Markdown | `docs/` |
| Config / Secrets | env, yaml | `config/`, `config/generated/` |

> Each backend/frontend layer also ships a `modules/` or `generated/` folder
> with 70–110 auto-generated files, one vulnerability/bug/smell class per
> uniquely-named function, so scan results reflect a large, distinct-callsite
> codebase rather than a handful of hand-written examples.

**Total size: 33,050 lines of code across 443 files**, with **2,315 tagged
security issues, 1,080 tagged bugs, and 1,440 tagged code smells** (all
grep-verifiable — see `docs/VULNERABILITY_SCAN_REPORT.md`), designed to give
GHAS and SonarQube a realistically large volume of findings to surface.

## Quick start

```bash
unzip vuln-test-repo.zip
cd vuln-test-repo
git init
git add .
git commit -m "Initial commit: intentionally vulnerable test repository"
git branch -M main
git remote add origin <YOUR_EMPTY_GITHUB_REPO_URL>
git push -u origin main
```

See **[docs/SETUP_GUIDE.md](docs/SETUP_GUIDE.md)** for full step-by-step instructions
on enabling GHAS (CodeQL, secret scanning, push protection, Dependabot) and wiring up
SonarQube/SonarCloud via GitHub Actions.

See **[docs/SECURITY_NOTES.md](docs/SECURITY_NOTES.md)** for a full inventory of every
injected vulnerability, which file/line it's in, its CWE classification, and which
scanner category (CodeQL / Secret Scanning / Dependency Scanning / SonarQube) should
catch it — use this as your "answer key" to measure detection efficacy.

See **[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)** for a description of the (fake)
system this test app is modeled after.

## Important: pushing this safely to GitHub

Because this repo contains fake secrets in formats recognized by GitHub's secret
scanning **push protection**, your first `git push` may be **blocked** by GitHub
before it even reaches CodeQL/SonarQube. This is expected and is actually a great
first signal that push protection works. See the SETUP_GUIDE for how to either:
- allow the push once (recommended, since these are dummy values), or
- temporarily disable push protection for this one-time seed commit.

## Repository size

Run `git ls-files | xargs wc -l` (or `cloc .` if installed) after cloning to confirm
line counts. This project is intentionally small/medium so all workflows finish in
a few minutes.
