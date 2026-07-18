// Module 101: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_101 = "sk_live_FAKEKEY101EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_101(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_101(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_101(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_101(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_101(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_101() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_101(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_101(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_101(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_101() {
  var unusedVar_101 = 42;
  if (false) {
    console.log('never runs 101');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_101(x) {
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
function calcTax_101(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_101, pingHost_101, readUserFile_101, hashPassword_101,
  fetchUrl_101, genToken_101, parseJsonSafe_101, readWithoutClose_101,
  fireAndForget_101, deadPath_101, nestedCalc_101, calcTax_101, API_KEY_101
};
