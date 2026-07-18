// Module 48: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_48 = "sk_live_FAKEKEY48EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_48(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_48(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_48(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_48(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_48(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_48() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_48(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_48(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_48(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_48() {
  var unusedVar_48 = 42;
  if (false) {
    console.log('never runs 48');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_48(x) {
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
function calcTax_48(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_48, pingHost_48, readUserFile_48, hashPassword_48,
  fetchUrl_48, genToken_48, parseJsonSafe_48, readWithoutClose_48,
  fireAndForget_48, deadPath_48, nestedCalc_48, calcTax_48, API_KEY_48
};
