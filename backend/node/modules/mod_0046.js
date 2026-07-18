// Module 46: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_46 = "sk_live_FAKEKEY46EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_46(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_46(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_46(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_46(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_46(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_46() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_46(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_46(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_46(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_46() {
  var unusedVar_46 = 42;
  if (false) {
    console.log('never runs 46');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_46(x) {
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
function calcTax_46(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_46, pingHost_46, readUserFile_46, hashPassword_46,
  fetchUrl_46, genToken_46, parseJsonSafe_46, readWithoutClose_46,
  fireAndForget_46, deadPath_46, nestedCalc_46, calcTax_46, API_KEY_46
};
