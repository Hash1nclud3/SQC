// Module 62: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_62 = "sk_live_FAKEKEY62EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_62(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_62(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_62(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_62(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_62(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_62() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_62(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_62(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_62(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_62() {
  var unusedVar_62 = 42;
  if (false) {
    console.log('never runs 62');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_62(x) {
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
function calcTax_62(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_62, pingHost_62, readUserFile_62, hashPassword_62,
  fetchUrl_62, genToken_62, parseJsonSafe_62, readWithoutClose_62,
  fireAndForget_62, deadPath_62, nestedCalc_62, calcTax_62, API_KEY_62
};
