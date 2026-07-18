// Module 76: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_76 = "sk_live_FAKEKEY76EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_76(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_76(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_76(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_76(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_76(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_76() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_76(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_76(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_76(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_76() {
  var unusedVar_76 = 42;
  if (false) {
    console.log('never runs 76');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_76(x) {
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
function calcTax_76(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_76, pingHost_76, readUserFile_76, hashPassword_76,
  fetchUrl_76, genToken_76, parseJsonSafe_76, readWithoutClose_76,
  fireAndForget_76, deadPath_76, nestedCalc_76, calcTax_76, API_KEY_76
};
