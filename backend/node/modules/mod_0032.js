// Module 32: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_32 = "sk_live_FAKEKEY32EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_32(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_32(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_32(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_32(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_32(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_32() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_32(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_32(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_32(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_32() {
  var unusedVar_32 = 42;
  if (false) {
    console.log('never runs 32');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_32(x) {
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
function calcTax_32(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_32, pingHost_32, readUserFile_32, hashPassword_32,
  fetchUrl_32, genToken_32, parseJsonSafe_32, readWithoutClose_32,
  fireAndForget_32, deadPath_32, nestedCalc_32, calcTax_32, API_KEY_32
};
