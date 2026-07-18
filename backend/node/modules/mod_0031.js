// Module 31: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_31 = "sk_live_FAKEKEY31EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_31(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_31(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_31(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_31(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_31(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_31() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_31(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_31(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_31(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_31() {
  var unusedVar_31 = 42;
  if (false) {
    console.log('never runs 31');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_31(x) {
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
function calcTax_31(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_31, pingHost_31, readUserFile_31, hashPassword_31,
  fetchUrl_31, genToken_31, parseJsonSafe_31, readWithoutClose_31,
  fireAndForget_31, deadPath_31, nestedCalc_31, calcTax_31, API_KEY_31
};
