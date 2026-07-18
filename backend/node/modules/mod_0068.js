// Module 68: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_68 = "sk_live_FAKEKEY68EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_68(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_68(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_68(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_68(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_68(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_68() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_68(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_68(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_68(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_68() {
  var unusedVar_68 = 42;
  if (false) {
    console.log('never runs 68');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_68(x) {
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
function calcTax_68(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_68, pingHost_68, readUserFile_68, hashPassword_68,
  fetchUrl_68, genToken_68, parseJsonSafe_68, readWithoutClose_68,
  fireAndForget_68, deadPath_68, nestedCalc_68, calcTax_68, API_KEY_68
};
