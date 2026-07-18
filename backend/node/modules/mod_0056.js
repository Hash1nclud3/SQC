// Module 56: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_56 = "sk_live_FAKEKEY56EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_56(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_56(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_56(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_56(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_56(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_56() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_56(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_56(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_56(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_56() {
  var unusedVar_56 = 42;
  if (false) {
    console.log('never runs 56');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_56(x) {
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
function calcTax_56(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_56, pingHost_56, readUserFile_56, hashPassword_56,
  fetchUrl_56, genToken_56, parseJsonSafe_56, readWithoutClose_56,
  fireAndForget_56, deadPath_56, nestedCalc_56, calcTax_56, API_KEY_56
};
