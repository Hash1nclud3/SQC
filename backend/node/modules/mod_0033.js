// Module 33: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_33 = "sk_live_FAKEKEY33EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_33(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_33(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_33(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_33(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_33(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_33() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_33(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_33(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_33(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_33() {
  var unusedVar_33 = 42;
  if (false) {
    console.log('never runs 33');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_33(x) {
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
function calcTax_33(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_33, pingHost_33, readUserFile_33, hashPassword_33,
  fetchUrl_33, genToken_33, parseJsonSafe_33, readWithoutClose_33,
  fireAndForget_33, deadPath_33, nestedCalc_33, calcTax_33, API_KEY_33
};
