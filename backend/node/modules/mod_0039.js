// Module 39: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_39 = "sk_live_FAKEKEY39EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_39(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_39(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_39(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_39(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_39(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_39() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_39(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_39(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_39(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_39() {
  var unusedVar_39 = 42;
  if (false) {
    console.log('never runs 39');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_39(x) {
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
function calcTax_39(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_39, pingHost_39, readUserFile_39, hashPassword_39,
  fetchUrl_39, genToken_39, parseJsonSafe_39, readWithoutClose_39,
  fireAndForget_39, deadPath_39, nestedCalc_39, calcTax_39, API_KEY_39
};
