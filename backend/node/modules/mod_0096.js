// Module 96: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_96 = "sk_live_FAKEKEY96EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_96(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_96(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_96(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_96(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_96(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_96() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_96(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_96(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_96(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_96() {
  var unusedVar_96 = 42;
  if (false) {
    console.log('never runs 96');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_96(x) {
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
function calcTax_96(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_96, pingHost_96, readUserFile_96, hashPassword_96,
  fetchUrl_96, genToken_96, parseJsonSafe_96, readWithoutClose_96,
  fireAndForget_96, deadPath_96, nestedCalc_96, calcTax_96, API_KEY_96
};
