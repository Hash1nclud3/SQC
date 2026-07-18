// Module 25: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_25 = "sk_live_FAKEKEY25EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_25(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_25(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_25(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_25(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_25(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_25() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_25(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_25(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_25(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_25() {
  var unusedVar_25 = 42;
  if (false) {
    console.log('never runs 25');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_25(x) {
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
function calcTax_25(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_25, pingHost_25, readUserFile_25, hashPassword_25,
  fetchUrl_25, genToken_25, parseJsonSafe_25, readWithoutClose_25,
  fireAndForget_25, deadPath_25, nestedCalc_25, calcTax_25, API_KEY_25
};
