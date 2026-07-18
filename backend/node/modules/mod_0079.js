// Module 79: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_79 = "sk_live_FAKEKEY79EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_79(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_79(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_79(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_79(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_79(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_79() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_79(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_79(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_79(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_79() {
  var unusedVar_79 = 42;
  if (false) {
    console.log('never runs 79');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_79(x) {
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
function calcTax_79(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_79, pingHost_79, readUserFile_79, hashPassword_79,
  fetchUrl_79, genToken_79, parseJsonSafe_79, readWithoutClose_79,
  fireAndForget_79, deadPath_79, nestedCalc_79, calcTax_79, API_KEY_79
};
