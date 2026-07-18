// Module 60: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_60 = "sk_live_FAKEKEY60EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_60(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_60(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_60(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_60(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_60(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_60() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_60(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_60(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_60(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_60() {
  var unusedVar_60 = 42;
  if (false) {
    console.log('never runs 60');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_60(x) {
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
function calcTax_60(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_60, pingHost_60, readUserFile_60, hashPassword_60,
  fetchUrl_60, genToken_60, parseJsonSafe_60, readWithoutClose_60,
  fireAndForget_60, deadPath_60, nestedCalc_60, calcTax_60, API_KEY_60
};
