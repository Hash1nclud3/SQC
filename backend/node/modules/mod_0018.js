// Module 18: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_18 = "sk_live_FAKEKEY18EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_18(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_18(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_18(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_18(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_18(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_18() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_18(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_18(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_18(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_18() {
  var unusedVar_18 = 42;
  if (false) {
    console.log('never runs 18');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_18(x) {
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
function calcTax_18(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_18, pingHost_18, readUserFile_18, hashPassword_18,
  fetchUrl_18, genToken_18, parseJsonSafe_18, readWithoutClose_18,
  fireAndForget_18, deadPath_18, nestedCalc_18, calcTax_18, API_KEY_18
};
