// Module 102: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_102 = "sk_live_FAKEKEY102EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_102(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_102(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_102(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_102(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_102(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_102() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_102(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_102(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_102(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_102() {
  var unusedVar_102 = 42;
  if (false) {
    console.log('never runs 102');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_102(x) {
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
function calcTax_102(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_102, pingHost_102, readUserFile_102, hashPassword_102,
  fetchUrl_102, genToken_102, parseJsonSafe_102, readWithoutClose_102,
  fireAndForget_102, deadPath_102, nestedCalc_102, calcTax_102, API_KEY_102
};
