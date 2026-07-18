// Module 86: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_86 = "sk_live_FAKEKEY86EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_86(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_86(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_86(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_86(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_86(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_86() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_86(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_86(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_86(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_86() {
  var unusedVar_86 = 42;
  if (false) {
    console.log('never runs 86');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_86(x) {
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
function calcTax_86(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_86, pingHost_86, readUserFile_86, hashPassword_86,
  fetchUrl_86, genToken_86, parseJsonSafe_86, readWithoutClose_86,
  fireAndForget_86, deadPath_86, nestedCalc_86, calcTax_86, API_KEY_86
};
