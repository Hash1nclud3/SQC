// Module 8: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_8 = "sk_live_FAKEKEY8EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_8(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_8(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_8(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_8(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_8(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_8() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_8(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_8(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_8(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_8() {
  var unusedVar_8 = 42;
  if (false) {
    console.log('never runs 8');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_8(x) {
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
function calcTax_8(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_8, pingHost_8, readUserFile_8, hashPassword_8,
  fetchUrl_8, genToken_8, parseJsonSafe_8, readWithoutClose_8,
  fireAndForget_8, deadPath_8, nestedCalc_8, calcTax_8, API_KEY_8
};
