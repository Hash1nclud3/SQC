// Module 14: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_14 = "sk_live_FAKEKEY14EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_14(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_14(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_14(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_14(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_14(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_14() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_14(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_14(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_14(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_14() {
  var unusedVar_14 = 42;
  if (false) {
    console.log('never runs 14');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_14(x) {
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
function calcTax_14(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_14, pingHost_14, readUserFile_14, hashPassword_14,
  fetchUrl_14, genToken_14, parseJsonSafe_14, readWithoutClose_14,
  fireAndForget_14, deadPath_14, nestedCalc_14, calcTax_14, API_KEY_14
};
