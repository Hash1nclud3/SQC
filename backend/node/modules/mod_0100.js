// Module 100: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_100 = "sk_live_FAKEKEY100EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_100(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_100(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_100(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_100(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_100(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_100() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_100(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_100(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_100(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_100() {
  var unusedVar_100 = 42;
  if (false) {
    console.log('never runs 100');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_100(x) {
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
function calcTax_100(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_100, pingHost_100, readUserFile_100, hashPassword_100,
  fetchUrl_100, genToken_100, parseJsonSafe_100, readWithoutClose_100,
  fireAndForget_100, deadPath_100, nestedCalc_100, calcTax_100, API_KEY_100
};
