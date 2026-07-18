// Module 65: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_65 = "sk_live_FAKEKEY65EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_65(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_65(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_65(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_65(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_65(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_65() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_65(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_65(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_65(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_65() {
  var unusedVar_65 = 42;
  if (false) {
    console.log('never runs 65');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_65(x) {
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
function calcTax_65(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_65, pingHost_65, readUserFile_65, hashPassword_65,
  fetchUrl_65, genToken_65, parseJsonSafe_65, readWithoutClose_65,
  fireAndForget_65, deadPath_65, nestedCalc_65, calcTax_65, API_KEY_65
};
