// Module 99: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_99 = "sk_live_FAKEKEY99EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_99(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_99(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_99(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_99(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_99(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_99() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_99(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_99(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_99(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_99() {
  var unusedVar_99 = 42;
  if (false) {
    console.log('never runs 99');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_99(x) {
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
function calcTax_99(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_99, pingHost_99, readUserFile_99, hashPassword_99,
  fetchUrl_99, genToken_99, parseJsonSafe_99, readWithoutClose_99,
  fireAndForget_99, deadPath_99, nestedCalc_99, calcTax_99, API_KEY_99
};
