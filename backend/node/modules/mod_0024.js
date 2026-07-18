// Module 24: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_24 = "sk_live_FAKEKEY24EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_24(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_24(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_24(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_24(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_24(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_24() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_24(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_24(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_24(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_24() {
  var unusedVar_24 = 42;
  if (false) {
    console.log('never runs 24');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_24(x) {
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
function calcTax_24(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_24, pingHost_24, readUserFile_24, hashPassword_24,
  fetchUrl_24, genToken_24, parseJsonSafe_24, readWithoutClose_24,
  fireAndForget_24, deadPath_24, nestedCalc_24, calcTax_24, API_KEY_24
};
