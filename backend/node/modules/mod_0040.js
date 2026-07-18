// Module 40: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_40 = "sk_live_FAKEKEY40EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_40(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_40(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_40(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_40(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_40(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_40() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_40(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_40(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_40(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_40() {
  var unusedVar_40 = 42;
  if (false) {
    console.log('never runs 40');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_40(x) {
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
function calcTax_40(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_40, pingHost_40, readUserFile_40, hashPassword_40,
  fetchUrl_40, genToken_40, parseJsonSafe_40, readWithoutClose_40,
  fireAndForget_40, deadPath_40, nestedCalc_40, calcTax_40, API_KEY_40
};
