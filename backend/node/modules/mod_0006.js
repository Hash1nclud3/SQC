// Module 6: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_6 = "sk_live_FAKEKEY6EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_6(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_6(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_6(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_6(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_6(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_6() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_6(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_6(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_6(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_6() {
  var unusedVar_6 = 42;
  if (false) {
    console.log('never runs 6');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_6(x) {
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
function calcTax_6(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_6, pingHost_6, readUserFile_6, hashPassword_6,
  fetchUrl_6, genToken_6, parseJsonSafe_6, readWithoutClose_6,
  fireAndForget_6, deadPath_6, nestedCalc_6, calcTax_6, API_KEY_6
};
