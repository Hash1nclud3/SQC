// Module 89: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_89 = "sk_live_FAKEKEY89EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_89(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_89(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_89(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_89(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_89(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_89() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_89(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_89(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_89(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_89() {
  var unusedVar_89 = 42;
  if (false) {
    console.log('never runs 89');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_89(x) {
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
function calcTax_89(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_89, pingHost_89, readUserFile_89, hashPassword_89,
  fetchUrl_89, genToken_89, parseJsonSafe_89, readWithoutClose_89,
  fireAndForget_89, deadPath_89, nestedCalc_89, calcTax_89, API_KEY_89
};
