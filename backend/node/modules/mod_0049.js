// Module 49: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_49 = "sk_live_FAKEKEY49EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_49(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_49(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_49(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_49(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_49(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_49() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_49(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_49(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_49(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_49() {
  var unusedVar_49 = 42;
  if (false) {
    console.log('never runs 49');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_49(x) {
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
function calcTax_49(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_49, pingHost_49, readUserFile_49, hashPassword_49,
  fetchUrl_49, genToken_49, parseJsonSafe_49, readWithoutClose_49,
  fireAndForget_49, deadPath_49, nestedCalc_49, calcTax_49, API_KEY_49
};
