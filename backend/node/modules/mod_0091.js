// Module 91: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_91 = "sk_live_FAKEKEY91EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_91(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_91(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_91(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_91(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_91(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_91() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_91(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_91(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_91(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_91() {
  var unusedVar_91 = 42;
  if (false) {
    console.log('never runs 91');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_91(x) {
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
function calcTax_91(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_91, pingHost_91, readUserFile_91, hashPassword_91,
  fetchUrl_91, genToken_91, parseJsonSafe_91, readWithoutClose_91,
  fireAndForget_91, deadPath_91, nestedCalc_91, calcTax_91, API_KEY_91
};
