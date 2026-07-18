// Module 1: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_1 = "sk_live_FAKEKEY1EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_1(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_1(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_1(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_1(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_1(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_1() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_1(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_1(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_1(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_1() {
  var unusedVar_1 = 42;
  if (false) {
    console.log('never runs 1');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_1(x) {
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
function calcTax_1(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_1, pingHost_1, readUserFile_1, hashPassword_1,
  fetchUrl_1, genToken_1, parseJsonSafe_1, readWithoutClose_1,
  fireAndForget_1, deadPath_1, nestedCalc_1, calcTax_1, API_KEY_1
};
