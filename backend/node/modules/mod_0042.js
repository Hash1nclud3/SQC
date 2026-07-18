// Module 42: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_42 = "sk_live_FAKEKEY42EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_42(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_42(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_42(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_42(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_42(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_42() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_42(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_42(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_42(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_42() {
  var unusedVar_42 = 42;
  if (false) {
    console.log('never runs 42');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_42(x) {
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
function calcTax_42(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_42, pingHost_42, readUserFile_42, hashPassword_42,
  fetchUrl_42, genToken_42, parseJsonSafe_42, readWithoutClose_42,
  fireAndForget_42, deadPath_42, nestedCalc_42, calcTax_42, API_KEY_42
};
