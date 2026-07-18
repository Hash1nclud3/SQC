// Module 90: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_90 = "sk_live_FAKEKEY90EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_90(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_90(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_90(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_90(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_90(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_90() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_90(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_90(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_90(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_90() {
  var unusedVar_90 = 42;
  if (false) {
    console.log('never runs 90');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_90(x) {
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
function calcTax_90(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_90, pingHost_90, readUserFile_90, hashPassword_90,
  fetchUrl_90, genToken_90, parseJsonSafe_90, readWithoutClose_90,
  fireAndForget_90, deadPath_90, nestedCalc_90, calcTax_90, API_KEY_90
};
