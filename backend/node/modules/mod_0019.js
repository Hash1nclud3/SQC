// Module 19: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_19 = "sk_live_FAKEKEY19EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_19(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_19(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_19(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_19(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_19(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_19() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_19(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_19(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_19(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_19() {
  var unusedVar_19 = 42;
  if (false) {
    console.log('never runs 19');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_19(x) {
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
function calcTax_19(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_19, pingHost_19, readUserFile_19, hashPassword_19,
  fetchUrl_19, genToken_19, parseJsonSafe_19, readWithoutClose_19,
  fireAndForget_19, deadPath_19, nestedCalc_19, calcTax_19, API_KEY_19
};
