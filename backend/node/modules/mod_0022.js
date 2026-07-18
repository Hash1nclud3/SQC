// Module 22: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_22 = "sk_live_FAKEKEY22EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_22(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_22(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_22(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_22(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_22(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_22() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_22(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_22(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_22(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_22() {
  var unusedVar_22 = 42;
  if (false) {
    console.log('never runs 22');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_22(x) {
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
function calcTax_22(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_22, pingHost_22, readUserFile_22, hashPassword_22,
  fetchUrl_22, genToken_22, parseJsonSafe_22, readWithoutClose_22,
  fireAndForget_22, deadPath_22, nestedCalc_22, calcTax_22, API_KEY_22
};
