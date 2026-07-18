// Module 29: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_29 = "sk_live_FAKEKEY29EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_29(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_29(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_29(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_29(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_29(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_29() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_29(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_29(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_29(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_29() {
  var unusedVar_29 = 42;
  if (false) {
    console.log('never runs 29');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_29(x) {
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
function calcTax_29(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_29, pingHost_29, readUserFile_29, hashPassword_29,
  fetchUrl_29, genToken_29, parseJsonSafe_29, readWithoutClose_29,
  fireAndForget_29, deadPath_29, nestedCalc_29, calcTax_29, API_KEY_29
};
