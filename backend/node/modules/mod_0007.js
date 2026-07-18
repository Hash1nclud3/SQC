// Module 7: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_7 = "sk_live_FAKEKEY7EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_7(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_7(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_7(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_7(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_7(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_7() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_7(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_7(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_7(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_7() {
  var unusedVar_7 = 42;
  if (false) {
    console.log('never runs 7');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_7(x) {
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
function calcTax_7(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_7, pingHost_7, readUserFile_7, hashPassword_7,
  fetchUrl_7, genToken_7, parseJsonSafe_7, readWithoutClose_7,
  fireAndForget_7, deadPath_7, nestedCalc_7, calcTax_7, API_KEY_7
};
