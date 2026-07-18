// Module 85: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_85 = "sk_live_FAKEKEY85EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_85(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_85(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_85(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_85(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_85(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_85() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_85(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_85(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_85(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_85() {
  var unusedVar_85 = 42;
  if (false) {
    console.log('never runs 85');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_85(x) {
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
function calcTax_85(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_85, pingHost_85, readUserFile_85, hashPassword_85,
  fetchUrl_85, genToken_85, parseJsonSafe_85, readWithoutClose_85,
  fireAndForget_85, deadPath_85, nestedCalc_85, calcTax_85, API_KEY_85
};
