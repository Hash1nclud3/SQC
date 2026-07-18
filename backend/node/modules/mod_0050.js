// Module 50: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_50 = "sk_live_FAKEKEY50EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_50(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_50(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_50(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_50(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_50(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_50() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_50(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_50(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_50(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_50() {
  var unusedVar_50 = 42;
  if (false) {
    console.log('never runs 50');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_50(x) {
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
function calcTax_50(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_50, pingHost_50, readUserFile_50, hashPassword_50,
  fetchUrl_50, genToken_50, parseJsonSafe_50, readWithoutClose_50,
  fireAndForget_50, deadPath_50, nestedCalc_50, calcTax_50, API_KEY_50
};
