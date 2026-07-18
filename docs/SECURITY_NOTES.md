# Vulnerability Inventory (Answer Key)

Full list of intentionally injected issues, for scoring scanner detection efficacy.
All secrets are fake/example values (several reuse AWS's own published example
key `AKIAIOSFODNN7EXAMPLE` and similar well-known dummy formats).

## Infrastructure & CI/CD

| # | File | Issue | CWE | Expected detector |
|---|---|---|---|---|
| 1 | `Dockerfile` | Outdated base image (`node:14`) | CWE-1104 | Dependency/Container scanning |
| 2 | `Dockerfile` | Runs as root | CWE-250 | CodeQL / hadolint-style rule (Sonar IaC) |
| 3 | `Dockerfile` | Hardcoded secrets in ENV | CWE-798 | Secret scanning |
| 4 | `Dockerfile` | `curl \| sh` remote code execution pattern | CWE-494 | Sonar/CodeQL IaC rule |
| 5 | `Dockerfile` | `chmod -R 777` | CWE-732 | Sonar IaC |
| 6 | `docker-compose.yml` | `privileged: true` | CWE-250 | Sonar IaC |
| 7 | `docker-compose.yml` | Docker socket mounted into container | CWE-269 | Sonar IaC |
| 8 | `docker-compose.yml` | Hardcoded DB credentials | CWE-798 | Secret scanning |
| 9 | `terraform/main.tf` | Hardcoded AWS credentials | CWE-798 | Secret scanning |
| 10 | `terraform/main.tf` | Plaintext password in `user_data` | CWE-798 | Secret scanning / Sonar IaC |
| 11 | `terraform/s3.tf` | Public read/write S3 bucket ACL | CWE-284 | Sonar IaC / Checkov-style rule |
| 12 | `terraform/s3.tf` | Public access block disabled | CWE-284 | Sonar IaC |
| 13 | `terraform/security_group.tf` | Security group open to `0.0.0.0/0` on SSH/RDP/DB ports | CWE-284 | Sonar IaC |
| 14 | `.github/workflows/ci.yml` | `pull_request_target` + PR head checkout (privilege escalation) | CWE-829 | CodeQL Actions queries |
| 15 | `.github/workflows/ci.yml` | Unsanitized `${{ }}` expression injected into `run:` shell | CWE-78 | CodeQL Actions queries |
| 16 | `.github/workflows/ci.yml` | Hardcoded token/password in workflow env | CWE-798 | Secret scanning |

## Backend — Node.js (`backend/node/`)

| # | File | Issue | CWE |
|---|---|---|---|
| 17 | `server.js` | SQL Injection (string concat) | CWE-89 |
| 18 | `server.js` | OS command injection via `exec` | CWE-78 |
| 19 | `server.js` | Path traversal on file read | CWE-22 |
| 20 | `server.js` | `eval()` on user input | CWE-95 |
| 21 | `server.js` | Hardcoded JWT secret / API keys | CWE-798 |
| 22 | `server.js` | `jwt.decode()` used instead of `jwt.verify()` | CWE-347 |
| 23 | `server.js` | MD5 used for password hashing | CWE-327 |
| 24 | `server.js` | Prototype pollution via `lodash.merge` with req.body | CWE-1321 |
| 25 | `server.js` | SSRF via unrestricted `axios.get(userUrl)` | CWE-918 |
| 26 | `server.js` | Wildcard CORS (`Access-Control-Allow-Origin: *`) | CWE-942 |
| 27 | `utils/auth.js` | Hardcoded API key | CWE-798 |
| 28 | `utils/auth.js` | `Math.random()` used for session tokens | CWE-338 |
| 29 | `utils/auth.js` | IDOR helper, no ownership check | CWE-639 |
| 30 | `routes/user.js` | Reflected XSS (unescaped HTML response) | CWE-79 |
| 31 | `routes/user.js` | Unrestricted file upload + path traversal | CWE-434 / CWE-22 |
| 32 | `package.json` | Multiple vulnerable dependency versions (express 4.16.0, lodash 4.17.4, jsonwebtoken 8.3.0, minimist 1.2.0, axios 0.18.0, moment 2.19.3, request 2.87.0, serialize-javascript 1.9.1, js-yaml 3.13.0, handlebars 4.0.11, ejs 2.5.7, node-forge 0.7.1) | Various CVEs | Dependency/Dependabot |

## Backend — Python (`backend/python/`)

| # | File | Issue | CWE |
|---|---|---|---|
| 33 | `app.py` | SQL Injection via `%` string formatting | CWE-89 |
| 34 | `app.py` | `os.system()` command injection | CWE-78 |
| 35 | `app.py` | `subprocess.run(..., shell=True)` injection | CWE-78 |
| 36 | `app.py` | `yaml.load()` without `SafeLoader` | CWE-502 |
| 37 | `app.py` | `pickle.loads()` on untrusted data | CWE-502 |
| 38 | `app.py` | XXE via `ElementTree.fromstring` | CWE-611 |
| 39 | `app.py` | MD5 for password hashing | CWE-327 |
| 40 | `app.py` | Path traversal on file read | CWE-22 |
| 41 | `app.py` | Hardcoded Flask secret key / API token | CWE-798 |
| 42 | `app.py` | `debug=True` bound to `0.0.0.0` | CWE-489 / CWE-1188 |
| 43 | `requirements.txt` | Multiple vulnerable dependency versions (Flask 0.12.2, Django 2.0.1, PyYAML 5.1, requests 2.6.0, Pillow 6.2.0, Jinja2 2.10, urllib3 1.24.1, paramiko 2.4.1, cryptography 2.3, lxml 4.2.1, Werkzeug 0.14.1) | Various CVEs | Dependency/Dependabot |

## Backend — Go (`backend/go/`)

| # | File | Issue | CWE |
|---|---|---|---|
| 44 | `main.go` | SQL Injection via `fmt.Sprintf` | CWE-89 |
| 45 | `main.go` | Command injection via `exec.Command("sh","-c", ...)` | CWE-78 |
| 46 | `main.go` | Hardcoded DB password / API secret | CWE-798 |
| 47 | `main.go` | `math/rand` used for token generation (not `crypto/rand`) | CWE-338 |
| 48 | `go.mod` | Vulnerable `dgrijalva/jwt-go` (unmaintained, known CVE), old gin-gonic | Known CVEs | Dependency scanning |

## Frontend (`frontend/`)

| # | File | Issue | CWE |
|---|---|---|---|
| 49 | `public/index.html` | Hardcoded API key in inline script | CWE-798 |
| 50 | `public/index.html` | Missing CSP | CWE-1021 |
| 51 | `src/App.jsx` | XSS via `dangerouslySetInnerHTML` on raw user input | CWE-79 |
| 52 | `src/App.jsx` | `eval()` on user-controlled expression | CWE-95 |
| 53 | `src/App.jsx` | Hardcoded API key / backdoor password | CWE-798 |
| 54 | `src/App.jsx` | Auth token stored in `localStorage` | CWE-522 |
| 55 | `src/App.jsx` | Plain HTTP request (no TLS) | CWE-319 |
| 56 | `src/components/UserProfile.tsx` | XSS via `dangerouslySetInnerHTML` | CWE-79 |
| 57 | `src/components/UserProfile.tsx` | Open redirect via unchecked `websiteUrl` | CWE-601 |
| 58 | `src/components/UserProfile.tsx` | Hardcoded session token | CWE-798 |
| 59 | `package.json` | Vulnerable dependency versions (react 16.4.0, react-scripts 3.0.0, axios 0.18.0, lodash 4.17.4, jquery 3.3.1, moment 2.19.3, serialize-javascript 1.9.1, marked 0.3.9) | Various CVEs | Dependency/Dependabot |

## Config / Secrets (`config/`)

| # | File | Issue | Expected detector |
|---|---|---|---|
| 60 | `secrets.env` | AWS key pair, GitHub PAT, Stripe key, Slack webhook, Google API key, Twilio token, fake RSA private key | Secret scanning (multiple partner patterns + generic high-entropy) |
| 61 | `settings.yaml` | Hardcoded DB creds, app secret key, SMTP password, overly permissive default role | Secret scanning / Sonar security hotspot |

## Code Quality / Maintainability (SonarQube-focused, not security)

- Deep nesting (5+ levels) in `processOrder` (Node), `process_data` (Python),
  `calculateDiscount` (Go)
- Duplicated logic: `calculateTax`/`computeTax`/`getTax` (Node),
  `calc_discount_a/b/c` (Python)
- Dead code / unreachable `if (false)` blocks in Node, Python, Go
- Unused variables in Node (`unusedVariable`), Python
  (`unused_var_1`/`unused_var_2`), Go (`unusedHelper`), TSX (`temp_unused`)
- Empty/swallowed `catch` blocks (Node, Python bare `except:`)
- Long parameter list / SRP violation:
  `validateAndProcessAndLogAndNotify` (Node)
- CSS: duplicate selectors, excessive `!important`, empty rule set,
  over-specific selector chain (`main.css`)

## Total inventory (hand-crafted files above): 61 tagged findings + dependency-level CVEs across 4 manifests

---

## Bulk-generated modules (scale layer)

On top of the 61 hand-crafted findings above, this repository includes **hundreds
of auto-generated modules** (`backend/node/modules/`, `backend/python/modules/`,
`backend/go/modules/`, `frontend/src/generated/`, `terraform/generated/`,
`config/generated/`) built from repeating templates, one vulnerability/smell
class per tagged function. Every injected issue carries an inline comment tag
(`SECURITY:`, `BUG:`, `SMELL:`) so totals can be verified at any time with:

```bash
grep -rho "SECURITY:[A-Z0-9_]*" --include="*.js" --include="*.py" --include="*.go" \
  --include="*.jsx" --include="*.tsx" --include="*.tf" . | sort | uniq -c | sort -rn

grep -rho "BUG:[A-Z0-9_]*" --include="*.js" --include="*.py" --include="*.go" \
  --include="*.jsx" --include="*.tsx" . | sort | uniq -c | sort -rn

grep -rho "SMELL:[A-Z0-9_]*" --include="*.js" --include="*.py" --include="*.go" \
  --include="*.jsx" --include="*.tsx" . | sort | uniq -c | sort -rn
```

See `docs/VULNERABILITY_SCAN_REPORT.md` for the full verified counts (2,315
security-tagged issues, 1,080 bug-tagged issues, 1,440 smell-tagged issues, plus
105 additional fake-secret entries across 15 generated env files).
