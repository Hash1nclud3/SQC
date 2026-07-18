// Module 30: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_30 = "sk_live_FAKEKEY30EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_30(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_30(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_30(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_30(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_30(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_30() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_30(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_30(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_30(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_30() {
  var unusedVar_30 = 42;
  if (false) {
    console.log('never runs 30');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_30(x) {
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
function calcTax_30(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_30, pingHost_30, readUserFile_30, hashPassword_30,
  fetchUrl_30, genToken_30, parseJsonSafe_30, readWithoutClose_30,
  fireAndForget_30, deadPath_30, nestedCalc_30, calcTax_30, API_KEY_30
};
