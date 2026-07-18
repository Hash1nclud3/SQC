// Module 94: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_94 = "sk_live_FAKEKEY94EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_94(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_94(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_94(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_94(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_94(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_94() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_94(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_94(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_94(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_94() {
  var unusedVar_94 = 42;
  if (false) {
    console.log('never runs 94');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_94(x) {
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
function calcTax_94(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_94, pingHost_94, readUserFile_94, hashPassword_94,
  fetchUrl_94, genToken_94, parseJsonSafe_94, readWithoutClose_94,
  fireAndForget_94, deadPath_94, nestedCalc_94, calcTax_94, API_KEY_94
};
