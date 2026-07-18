// Module 16: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_16 = "sk_live_FAKEKEY16EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_16(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_16(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_16(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_16(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_16(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_16() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_16(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_16(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_16(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_16() {
  var unusedVar_16 = 42;
  if (false) {
    console.log('never runs 16');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_16(x) {
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
function calcTax_16(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_16, pingHost_16, readUserFile_16, hashPassword_16,
  fetchUrl_16, genToken_16, parseJsonSafe_16, readWithoutClose_16,
  fireAndForget_16, deadPath_16, nestedCalc_16, calcTax_16, API_KEY_16
};
