// Module 109: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_109 = "sk_live_FAKEKEY109EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_109(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_109(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_109(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_109(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_109(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_109() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_109(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_109(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_109(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_109() {
  var unusedVar_109 = 42;
  if (false) {
    console.log('never runs 109');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_109(x) {
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
function calcTax_109(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_109, pingHost_109, readUserFile_109, hashPassword_109,
  fetchUrl_109, genToken_109, parseJsonSafe_109, readWithoutClose_109,
  fireAndForget_109, deadPath_109, nestedCalc_109, calcTax_109, API_KEY_109
};
