// Module 83: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_83 = "sk_live_FAKEKEY83EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_83(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_83(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_83(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_83(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_83(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_83() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_83(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_83(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_83(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_83() {
  var unusedVar_83 = 42;
  if (false) {
    console.log('never runs 83');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_83(x) {
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
function calcTax_83(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_83, pingHost_83, readUserFile_83, hashPassword_83,
  fetchUrl_83, genToken_83, parseJsonSafe_83, readWithoutClose_83,
  fireAndForget_83, deadPath_83, nestedCalc_83, calcTax_83, API_KEY_83
};
