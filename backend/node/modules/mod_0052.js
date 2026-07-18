// Module 52: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_52 = "sk_live_FAKEKEY52EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_52(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_52(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_52(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_52(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_52(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_52() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_52(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_52(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_52(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_52() {
  var unusedVar_52 = 42;
  if (false) {
    console.log('never runs 52');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_52(x) {
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
function calcTax_52(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_52, pingHost_52, readUserFile_52, hashPassword_52,
  fetchUrl_52, genToken_52, parseJsonSafe_52, readWithoutClose_52,
  fireAndForget_52, deadPath_52, nestedCalc_52, calcTax_52, API_KEY_52
};
