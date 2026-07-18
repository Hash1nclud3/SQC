// Module 93: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_93 = "sk_live_FAKEKEY93EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_93(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_93(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_93(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_93(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_93(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_93() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_93(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_93(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_93(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_93() {
  var unusedVar_93 = 42;
  if (false) {
    console.log('never runs 93');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_93(x) {
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
function calcTax_93(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_93, pingHost_93, readUserFile_93, hashPassword_93,
  fetchUrl_93, genToken_93, parseJsonSafe_93, readWithoutClose_93,
  fireAndForget_93, deadPath_93, nestedCalc_93, calcTax_93, API_KEY_93
};
