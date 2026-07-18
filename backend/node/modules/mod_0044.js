// Module 44: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_44 = "sk_live_FAKEKEY44EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_44(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_44(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_44(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_44(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_44(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_44() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_44(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_44(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_44(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_44() {
  var unusedVar_44 = 42;
  if (false) {
    console.log('never runs 44');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_44(x) {
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
function calcTax_44(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_44, pingHost_44, readUserFile_44, hashPassword_44,
  fetchUrl_44, genToken_44, parseJsonSafe_44, readWithoutClose_44,
  fireAndForget_44, deadPath_44, nestedCalc_44, calcTax_44, API_KEY_44
};
