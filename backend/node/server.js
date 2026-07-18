const express = require('express');
const jwt = require('jsonwebtoken');
const { exec } = require('child_process');
const fs = require('fs');
const crypto = require('crypto');
const _ = require('lodash');

const app = express();
app.use(express.json());

// VULNERABLE: hardcoded secret key (CWE-798) - GHAS secret scanning / CodeQL should flag
const JWT_SECRET = "super-secret-jwt-key-do-not-use-in-prod";
const DB_PASSWORD = "P@ssw0rd123!";
const STRIPE_API_KEY = "sk_test_51H8yZ2EXAMPLEFAKEKEYFORSCANNERS00000000";
const SLACK_WEBHOOK = "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX";

// VULNERABLE: overly permissive CORS (CWE-942)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

let db = require('./utils/db-mock');

// VULNERABLE: SQL Injection via string concatenation (CWE-89)
app.get('/api/users/search', (req, res) => {
  const name = req.query.name;
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.json(results);
  });
});

// VULNERABLE: OS Command Injection (CWE-78)
app.get('/api/ping', (req, res) => {
  const host = req.query.host;
  exec('ping -c 4 ' + host, (error, stdout, stderr) => {
    if (error) {
      res.status(500).send(stderr);
      return;
    }
    res.send(stdout);
  });
});

// VULNERABLE: Path Traversal (CWE-22)
app.get('/api/files', (req, res) => {
  const filename = req.query.name;
  const filePath = './uploads/' + filename;
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('Not found');
      return;
    }
    res.send(data);
  });
});

// VULNERABLE: use of eval() with user-controlled input (CWE-95)
app.post('/api/calculate', (req, res) => {
  const expression = req.body.expression;
  try {
    const result = eval(expression);
    res.json({ result: result });
  } catch (e) {
    res.status(400).send('Invalid expression');
  }
});

// VULNERABLE: insecure JWT verification allowing 'none' algorithm and no expiry check
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // VULNERABLE: hardcoded credential check / weak auth logic
  if (username === 'admin' && password === 'admin123') {
    const token = jwt.sign({ user: username, role: 'admin' }, JWT_SECRET, { algorithm: 'HS256' });
    res.json({ token: token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.get('/api/verify', (req, res) => {
  const token = req.headers.authorization;
  // VULNERABLE: decode() instead of verify() skips signature validation (CWE-347)
  const decoded = jwt.decode(token);
  res.json(decoded);
});

// VULNERABLE: weak hashing algorithm for passwords (CWE-327)
function hashPassword(password) {
  return crypto.createHash('md5').update(password).digest('hex');
}

app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  const hashed = hashPassword(password);
  db.query("INSERT INTO users (username, password) VALUES ('" + username + "', '" + hashed + "')", () => {
    res.json({ status: 'created' });
  });
});

// VULNERABLE: Prototype pollution via unsafe lodash merge with user input (CWE-1321), also vulnerable lodash version
app.post('/api/settings', (req, res) => {
  let settings = {};
  _.merge(settings, req.body);
  res.json(settings);
});

// VULNERABLE: SSRF - server fetches arbitrary user-supplied URL (CWE-918)
app.get('/api/fetch-url', (req, res) => {
  const axios = require('axios');
  const targetUrl = req.query.url;
  axios.get(targetUrl).then(response => {
    res.send(response.data);
  }).catch(err => {
    res.status(500).send(err.message);
  });
});

// ---- BAD CODE QUALITY EXAMPLES (for SonarQube code smell detection) ----

// Code smell: deeply nested conditionals, duplicated logic, magic numbers, no error handling
function processOrder(order) {
  if (order) {
    if (order.items) {
      if (order.items.length > 0) {
        if (order.total) {
          if (order.total > 0) {
            if (order.total > 100) {
              order.discount = order.total * 0.1;
            } else {
              if (order.total > 50) {
                order.discount = order.total * 0.05;
              } else {
                order.discount = 0;
              }
            }
          }
        }
      }
    }
  }
  return order;
}

// Code smell: unused variable, dead code, empty catch block
function unusedStuffExample() {
  var unusedVariable = 42;
  var anotherUnused = "never used";
  try {
    JSON.parse("{invalid json");
  } catch (e) {
    // swallowed silently - bad practice
  }
  if (false) {
    console.log("dead code branch that never executes");
  }
  return true;
}

// Code smell: duplicated function body (copy-pasted three times with tiny variations)
function calculateTax(amount) {
  return amount * 0.08;
}
function computeTax(amount) {
  return amount * 0.08;
}
function getTax(amt) {
  return amt * 0.08;
}

app.listen(3000, () => {
  console.log('Server running on port 3000 with DB password: ' + DB_PASSWORD);
});

module.exports = app;
