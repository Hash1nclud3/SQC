// Module 47: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_47 = "sk_live_FAKEKEY47EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_47(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_47(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_47(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_47(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_47(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_47() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_47(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_47(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_47(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_47() {
  var unusedVar_47 = 42;
  if (false) {
    console.log('never runs 47');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_47(x) {
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
function calcTax_47(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_47, pingHost_47, readUserFile_47, hashPassword_47,
  fetchUrl_47, genToken_47, parseJsonSafe_47, readWithoutClose_47,
  fireAndForget_47, deadPath_47, nestedCalc_47, calcTax_47, API_KEY_47
};
