// Module 108: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_108 = "sk_live_FAKEKEY108EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_108(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_108(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_108(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_108(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_108(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_108() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_108(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_108(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_108(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_108() {
  var unusedVar_108 = 42;
  if (false) {
    console.log('never runs 108');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_108(x) {
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
function calcTax_108(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_108, pingHost_108, readUserFile_108, hashPassword_108,
  fetchUrl_108, genToken_108, parseJsonSafe_108, readWithoutClose_108,
  fireAndForget_108, deadPath_108, nestedCalc_108, calcTax_108, API_KEY_108
};
