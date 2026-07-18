// Module 55: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_55 = "sk_live_FAKEKEY55EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_55(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_55(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_55(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_55(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_55(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_55() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_55(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_55(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_55(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_55() {
  var unusedVar_55 = 42;
  if (false) {
    console.log('never runs 55');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_55(x) {
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
function calcTax_55(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_55, pingHost_55, readUserFile_55, hashPassword_55,
  fetchUrl_55, genToken_55, parseJsonSafe_55, readWithoutClose_55,
  fireAndForget_55, deadPath_55, nestedCalc_55, calcTax_55, API_KEY_55
};
