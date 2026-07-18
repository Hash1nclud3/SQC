// Module 12: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_12 = "sk_live_FAKEKEY12EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_12(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_12(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_12(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_12(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_12(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_12() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_12(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_12(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_12(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_12() {
  var unusedVar_12 = 42;
  if (false) {
    console.log('never runs 12');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_12(x) {
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
function calcTax_12(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_12, pingHost_12, readUserFile_12, hashPassword_12,
  fetchUrl_12, genToken_12, parseJsonSafe_12, readWithoutClose_12,
  fireAndForget_12, deadPath_12, nestedCalc_12, calcTax_12, API_KEY_12
};
