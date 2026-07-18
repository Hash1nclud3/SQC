# Architecture Overview (Test Fixture)

This is a fictional small e-commerce-style application used purely as a vehicle
to carry a spread of vulnerability and code-quality patterns across a realistic
multi-language, multi-layer project shape. There is no real business logic to
learn here — the "features" (login, search, file upload, ping utility,
calculator) exist only to host specific vulnerable code paths.

## Components

- **backend/node** — Express.js API. Simulates a "user service" (auth, search,
  file access).
- **backend/python** — Flask API. Simulates a "config/admin service"
  (deserialization, XML parsing, shell utilities).
- **backend/go** — Gin API. Simulates a lightweight "internal tools service".
- **frontend** — React SPA that talks to the above services, rendering
  user-supplied content and handling login.
- **terraform** — Fictional AWS infra (EC2, S3, security groups) the app would
  hypothetically run on.
- **.github/workflows** — CI/CD pipelines: CodeQL scanning, SonarQube scanning,
  and a basic (intentionally insecure) build workflow.
- **config** — Centralized fake secrets/config used to seed secret-scanning
  tests.

## Data flow (fictional)

```
[React frontend] --HTTP--> [Node API] --SQL--> [(mock DB)]
                        \-> [Python API] --> [pickle/yaml/XML parsing]
                        \-> [Go API] --> [(sqlite)]
```

None of these services are meant to actually run together in production — they
exist independently so each language's toolchain (npm/pip/go) can be scanned.
