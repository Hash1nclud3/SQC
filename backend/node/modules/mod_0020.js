// Module 20: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_20 = "sk_live_FAKEKEY20EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_20(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_20(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_20(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_20(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_20(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_20() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_20(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_20(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_20(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_20() {
  var unusedVar_20 = 42;
  if (false) {
    console.log('never runs 20');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_20(x) {
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
function calcTax_20(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_20, pingHost_20, readUserFile_20, hashPassword_20,
  fetchUrl_20, genToken_20, parseJsonSafe_20, readWithoutClose_20,
  fireAndForget_20, deadPath_20, nestedCalc_20, calcTax_20, API_KEY_20
};
