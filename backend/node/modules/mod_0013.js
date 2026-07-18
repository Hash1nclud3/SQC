// Module 13: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_13 = "sk_live_FAKEKEY13EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_13(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_13(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_13(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_13(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_13(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_13() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_13(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_13(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_13(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_13() {
  var unusedVar_13 = 42;
  if (false) {
    console.log('never runs 13');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_13(x) {
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
function calcTax_13(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_13, pingHost_13, readUserFile_13, hashPassword_13,
  fetchUrl_13, genToken_13, parseJsonSafe_13, readWithoutClose_13,
  fireAndForget_13, deadPath_13, nestedCalc_13, calcTax_13, API_KEY_13
};
