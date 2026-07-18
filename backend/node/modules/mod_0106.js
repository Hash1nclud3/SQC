// Module 106: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_106 = "sk_live_FAKEKEY106EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_106(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_106(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_106(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_106(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_106(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_106() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_106(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_106(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_106(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_106() {
  var unusedVar_106 = 42;
  if (false) {
    console.log('never runs 106');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_106(x) {
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
function calcTax_106(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_106, pingHost_106, readUserFile_106, hashPassword_106,
  fetchUrl_106, genToken_106, parseJsonSafe_106, readWithoutClose_106,
  fireAndForget_106, deadPath_106, nestedCalc_106, calcTax_106, API_KEY_106
};
