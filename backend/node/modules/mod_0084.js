// Module 84: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_84 = "sk_live_FAKEKEY84EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_84(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_84(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_84(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_84(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_84(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_84() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_84(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_84(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_84(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_84() {
  var unusedVar_84 = 42;
  if (false) {
    console.log('never runs 84');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_84(x) {
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
function calcTax_84(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_84, pingHost_84, readUserFile_84, hashPassword_84,
  fetchUrl_84, genToken_84, parseJsonSafe_84, readWithoutClose_84,
  fireAndForget_84, deadPath_84, nestedCalc_84, calcTax_84, API_KEY_84
};
