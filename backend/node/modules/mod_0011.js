// Module 11: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_11 = "sk_live_FAKEKEY11EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_11(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_11(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_11(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_11(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_11(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_11() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_11(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_11(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_11(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_11() {
  var unusedVar_11 = 42;
  if (false) {
    console.log('never runs 11');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_11(x) {
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
function calcTax_11(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_11, pingHost_11, readUserFile_11, hashPassword_11,
  fetchUrl_11, genToken_11, parseJsonSafe_11, readWithoutClose_11,
  fireAndForget_11, deadPath_11, nestedCalc_11, calcTax_11, API_KEY_11
};
