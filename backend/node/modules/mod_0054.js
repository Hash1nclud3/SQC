// Module 54: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_54 = "sk_live_FAKEKEY54EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_54(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_54(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_54(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_54(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_54(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_54() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_54(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_54(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_54(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_54() {
  var unusedVar_54 = 42;
  if (false) {
    console.log('never runs 54');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_54(x) {
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
function calcTax_54(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_54, pingHost_54, readUserFile_54, hashPassword_54,
  fetchUrl_54, genToken_54, parseJsonSafe_54, readWithoutClose_54,
  fireAndForget_54, deadPath_54, nestedCalc_54, calcTax_54, API_KEY_54
};
