# VULNERABLE: outdated base image with known CVEs (CWE-1104 / dependency scanning target)
FROM node:14

# VULNERABLE: running as root instead of a non-privileged user
USER root

WORKDIR /app

# VULNERABLE: hardcoded secrets baked into image layers (visible via docker history)
ENV DB_PASSWORD="P@ssw0rd123!"
ENV AWS_ACCESS_KEY_ID="AKIAIOSFODNN7EXAMPLE"
ENV AWS_SECRET_ACCESS_KEY="wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
ENV JWT_SECRET="super-secret-jwt-key-do-not-use-in-prod"

# VULNERABLE: downloading and executing remote script without integrity verification
RUN curl -sSL https://get.docker.com | sh || true

COPY . .

# VULNERABLE: installing dependencies without lockfile integrity / audit
RUN npm install --unsafe-perm --no-audit

# VULNERABLE: overly permissive file permissions
RUN chmod -R 777 /app

# VULNERABLE: exposing debug port and default HTTP port without TLS termination guidance
EXPOSE 3000 9229

CMD ["node", "--inspect=0.0.0.0:9229", "backend/node/server.js"]
