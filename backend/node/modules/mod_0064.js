// Module 64: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_64 = "sk_live_FAKEKEY64EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_64(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_64(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_64(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_64(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_64(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_64() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_64(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_64(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_64(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_64() {
  var unusedVar_64 = 42;
  if (false) {
    console.log('never runs 64');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_64(x) {
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
function calcTax_64(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_64, pingHost_64, readUserFile_64, hashPassword_64,
  fetchUrl_64, genToken_64, parseJsonSafe_64, readWithoutClose_64,
  fireAndForget_64, deadPath_64, nestedCalc_64, calcTax_64, API_KEY_64
};
