// Module 37: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_37 = "sk_live_FAKEKEY37EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_37(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_37(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_37(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_37(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_37(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_37() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_37(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_37(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_37(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_37() {
  var unusedVar_37 = 42;
  if (false) {
    console.log('never runs 37');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_37(x) {
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
function calcTax_37(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_37, pingHost_37, readUserFile_37, hashPassword_37,
  fetchUrl_37, genToken_37, parseJsonSafe_37, readWithoutClose_37,
  fireAndForget_37, deadPath_37, nestedCalc_37, calcTax_37, API_KEY_37
};
