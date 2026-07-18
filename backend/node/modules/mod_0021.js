// Module 21: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_21 = "sk_live_FAKEKEY21EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_21(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_21(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_21(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_21(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_21(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_21() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_21(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_21(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_21(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_21() {
  var unusedVar_21 = 42;
  if (false) {
    console.log('never runs 21');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_21(x) {
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
function calcTax_21(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_21, pingHost_21, readUserFile_21, hashPassword_21,
  fetchUrl_21, genToken_21, parseJsonSafe_21, readWithoutClose_21,
  fireAndForget_21, deadPath_21, nestedCalc_21, calcTax_21, API_KEY_21
};
