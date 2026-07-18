// Module 63: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_63 = "sk_live_FAKEKEY63EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_63(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_63(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_63(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_63(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_63(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_63() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_63(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_63(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_63(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_63() {
  var unusedVar_63 = 42;
  if (false) {
    console.log('never runs 63');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_63(x) {
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
function calcTax_63(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_63, pingHost_63, readUserFile_63, hashPassword_63,
  fetchUrl_63, genToken_63, parseJsonSafe_63, readWithoutClose_63,
  fireAndForget_63, deadPath_63, nestedCalc_63, calcTax_63, API_KEY_63
};
