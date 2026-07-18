// Module 41: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_41 = "sk_live_FAKEKEY41EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_41(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_41(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_41(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_41(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_41(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_41() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_41(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_41(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_41(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_41() {
  var unusedVar_41 = 42;
  if (false) {
    console.log('never runs 41');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_41(x) {
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
function calcTax_41(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_41, pingHost_41, readUserFile_41, hashPassword_41,
  fetchUrl_41, genToken_41, parseJsonSafe_41, readWithoutClose_41,
  fireAndForget_41, deadPath_41, nestedCalc_41, calcTax_41, API_KEY_41
};
