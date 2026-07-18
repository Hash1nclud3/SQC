// Module 34: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_34 = "sk_live_FAKEKEY34EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_34(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_34(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_34(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_34(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_34(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_34() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_34(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_34(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_34(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_34() {
  var unusedVar_34 = 42;
  if (false) {
    console.log('never runs 34');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_34(x) {
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
function calcTax_34(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_34, pingHost_34, readUserFile_34, hashPassword_34,
  fetchUrl_34, genToken_34, parseJsonSafe_34, readWithoutClose_34,
  fireAndForget_34, deadPath_34, nestedCalc_34, calcTax_34, API_KEY_34
};
