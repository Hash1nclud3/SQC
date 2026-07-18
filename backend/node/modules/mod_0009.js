// Module 9: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_9 = "sk_live_FAKEKEY9EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_9(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_9(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_9(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_9(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_9(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_9() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_9(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_9(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_9(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_9() {
  var unusedVar_9 = 42;
  if (false) {
    console.log('never runs 9');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_9(x) {
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
function calcTax_9(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_9, pingHost_9, readUserFile_9, hashPassword_9,
  fetchUrl_9, genToken_9, parseJsonSafe_9, readWithoutClose_9,
  fireAndForget_9, deadPath_9, nestedCalc_9, calcTax_9, API_KEY_9
};
