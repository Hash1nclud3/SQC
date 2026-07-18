// Module 36: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_36 = "sk_live_FAKEKEY36EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_36(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_36(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_36(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_36(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_36(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_36() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_36(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_36(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_36(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_36() {
  var unusedVar_36 = 42;
  if (false) {
    console.log('never runs 36');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_36(x) {
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
function calcTax_36(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_36, pingHost_36, readUserFile_36, hashPassword_36,
  fetchUrl_36, genToken_36, parseJsonSafe_36, readWithoutClose_36,
  fireAndForget_36, deadPath_36, nestedCalc_36, calcTax_36, API_KEY_36
};
