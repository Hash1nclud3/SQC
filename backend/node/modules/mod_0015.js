// Module 15: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_15 = "sk_live_FAKEKEY15EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_15(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_15(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_15(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_15(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_15(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_15() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_15(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_15(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_15(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_15() {
  var unusedVar_15 = 42;
  if (false) {
    console.log('never runs 15');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_15(x) {
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
function calcTax_15(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_15, pingHost_15, readUserFile_15, hashPassword_15,
  fetchUrl_15, genToken_15, parseJsonSafe_15, readWithoutClose_15,
  fireAndForget_15, deadPath_15, nestedCalc_15, calcTax_15, API_KEY_15
};
