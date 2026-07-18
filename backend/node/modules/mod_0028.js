// Module 28: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_28 = "sk_live_FAKEKEY28EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_28(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_28(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_28(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_28(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_28(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_28() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_28(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_28(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_28(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_28() {
  var unusedVar_28 = 42;
  if (false) {
    console.log('never runs 28');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_28(x) {
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
function calcTax_28(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_28, pingHost_28, readUserFile_28, hashPassword_28,
  fetchUrl_28, genToken_28, parseJsonSafe_28, readWithoutClose_28,
  fireAndForget_28, deadPath_28, nestedCalc_28, calcTax_28, API_KEY_28
};
