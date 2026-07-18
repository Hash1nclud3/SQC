// Module 87: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_87 = "sk_live_FAKEKEY87EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_87(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_87(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_87(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_87(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_87(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_87() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_87(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_87(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_87(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_87() {
  var unusedVar_87 = 42;
  if (false) {
    console.log('never runs 87');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_87(x) {
  if (x > 0) {
    if (x > 10) {
      if (x > 100) {
        if (x > 1000) {
          return x * 0.5;
        }
      }
    }
  }
  return 0;
}

// SMELL:DUPLICATED_LOGIC
function calcTax_87(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_87, pingHost_87, readUserFile_87, hashPassword_87,
  fetchUrl_87, genToken_87, parseJsonSafe_87, readWithoutClose_87,
  fireAndForget_87, deadPath_87, nestedCalc_87, calcTax_87, API_KEY_87
};
