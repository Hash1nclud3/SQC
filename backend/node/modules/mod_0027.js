// Module 27: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_27 = "sk_live_FAKEKEY27EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_27(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_27(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_27(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_27(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_27(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_27() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_27(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_27(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_27(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_27() {
  var unusedVar_27 = 42;
  if (false) {
    console.log('never runs 27');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_27(x) {
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
function calcTax_27(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_27, pingHost_27, readUserFile_27, hashPassword_27,
  fetchUrl_27, genToken_27, parseJsonSafe_27, readWithoutClose_27,
  fireAndForget_27, deadPath_27, nestedCalc_27, calcTax_27, API_KEY_27
};
