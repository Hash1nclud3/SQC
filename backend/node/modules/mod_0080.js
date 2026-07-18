// Module 80: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_80 = "sk_live_FAKEKEY80EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_80(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_80(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_80(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_80(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_80(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_80() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_80(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_80(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_80(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_80() {
  var unusedVar_80 = 42;
  if (false) {
    console.log('never runs 80');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_80(x) {
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
function calcTax_80(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_80, pingHost_80, readUserFile_80, hashPassword_80,
  fetchUrl_80, genToken_80, parseJsonSafe_80, readWithoutClose_80,
  fireAndForget_80, deadPath_80, nestedCalc_80, calcTax_80, API_KEY_80
};
