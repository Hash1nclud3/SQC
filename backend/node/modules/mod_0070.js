// Module 70: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_70 = "sk_live_FAKEKEY70EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_70(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_70(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_70(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_70(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_70(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_70() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_70(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_70(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_70(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_70() {
  var unusedVar_70 = 42;
  if (false) {
    console.log('never runs 70');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_70(x) {
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
function calcTax_70(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_70, pingHost_70, readUserFile_70, hashPassword_70,
  fetchUrl_70, genToken_70, parseJsonSafe_70, readWithoutClose_70,
  fireAndForget_70, deadPath_70, nestedCalc_70, calcTax_70, API_KEY_70
};
