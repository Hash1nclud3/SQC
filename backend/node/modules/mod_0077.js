// Module 77: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_77 = "sk_live_FAKEKEY77EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_77(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_77(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_77(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_77(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_77(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_77() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_77(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_77(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_77(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_77() {
  var unusedVar_77 = 42;
  if (false) {
    console.log('never runs 77');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_77(x) {
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
function calcTax_77(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_77, pingHost_77, readUserFile_77, hashPassword_77,
  fetchUrl_77, genToken_77, parseJsonSafe_77, readWithoutClose_77,
  fireAndForget_77, deadPath_77, nestedCalc_77, calcTax_77, API_KEY_77
};
