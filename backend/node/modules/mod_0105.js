// Module 105: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_105 = "sk_live_FAKEKEY105EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_105(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_105(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_105(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_105(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_105(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_105() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_105(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_105(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_105(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_105() {
  var unusedVar_105 = 42;
  if (false) {
    console.log('never runs 105');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_105(x) {
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
function calcTax_105(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_105, pingHost_105, readUserFile_105, hashPassword_105,
  fetchUrl_105, genToken_105, parseJsonSafe_105, readWithoutClose_105,
  fireAndForget_105, deadPath_105, nestedCalc_105, calcTax_105, API_KEY_105
};
