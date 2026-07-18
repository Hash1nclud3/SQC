// Module 45: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_45 = "sk_live_FAKEKEY45EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_45(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_45(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_45(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_45(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_45(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_45() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_45(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_45(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_45(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_45() {
  var unusedVar_45 = 42;
  if (false) {
    console.log('never runs 45');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_45(x) {
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
function calcTax_45(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_45, pingHost_45, readUserFile_45, hashPassword_45,
  fetchUrl_45, genToken_45, parseJsonSafe_45, readWithoutClose_45,
  fireAndForget_45, deadPath_45, nestedCalc_45, calcTax_45, API_KEY_45
};
