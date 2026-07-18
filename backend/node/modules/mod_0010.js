// Module 10: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_10 = "sk_live_FAKEKEY10EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_10(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_10(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_10(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_10(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_10(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_10() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_10(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_10(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_10(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_10() {
  var unusedVar_10 = 42;
  if (false) {
    console.log('never runs 10');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_10(x) {
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
function calcTax_10(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_10, pingHost_10, readUserFile_10, hashPassword_10,
  fetchUrl_10, genToken_10, parseJsonSafe_10, readWithoutClose_10,
  fireAndForget_10, deadPath_10, nestedCalc_10, calcTax_10, API_KEY_10
};
