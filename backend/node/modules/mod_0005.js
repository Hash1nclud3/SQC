// Module 5: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_5 = "sk_live_FAKEKEY5EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_5(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_5(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_5(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_5(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_5(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_5() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_5(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_5(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_5(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_5() {
  var unusedVar_5 = 42;
  if (false) {
    console.log('never runs 5');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_5(x) {
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
function calcTax_5(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_5, pingHost_5, readUserFile_5, hashPassword_5,
  fetchUrl_5, genToken_5, parseJsonSafe_5, readWithoutClose_5,
  fireAndForget_5, deadPath_5, nestedCalc_5, calcTax_5, API_KEY_5
};
