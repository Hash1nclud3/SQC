// Module 2: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_2 = "sk_live_FAKEKEY2EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_2(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_2(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_2(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_2(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_2(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_2() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_2(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_2(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_2(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_2() {
  var unusedVar_2 = 42;
  if (false) {
    console.log('never runs 2');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_2(x) {
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
function calcTax_2(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_2, pingHost_2, readUserFile_2, hashPassword_2,
  fetchUrl_2, genToken_2, parseJsonSafe_2, readWithoutClose_2,
  fireAndForget_2, deadPath_2, nestedCalc_2, calcTax_2, API_KEY_2
};
