// Module 23: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_23 = "sk_live_FAKEKEY23EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_23(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_23(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_23(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_23(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_23(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_23() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_23(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_23(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_23(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_23() {
  var unusedVar_23 = 42;
  if (false) {
    console.log('never runs 23');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_23(x) {
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
function calcTax_23(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_23, pingHost_23, readUserFile_23, hashPassword_23,
  fetchUrl_23, genToken_23, parseJsonSafe_23, readWithoutClose_23,
  fireAndForget_23, deadPath_23, nestedCalc_23, calcTax_23, API_KEY_23
};
