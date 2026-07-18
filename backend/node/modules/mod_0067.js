// Module 67: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_67 = "sk_live_FAKEKEY67EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_67(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_67(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_67(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_67(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_67(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_67() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_67(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_67(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_67(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_67() {
  var unusedVar_67 = 42;
  if (false) {
    console.log('never runs 67');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_67(x) {
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
function calcTax_67(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_67, pingHost_67, readUserFile_67, hashPassword_67,
  fetchUrl_67, genToken_67, parseJsonSafe_67, readWithoutClose_67,
  fireAndForget_67, deadPath_67, nestedCalc_67, calcTax_67, API_KEY_67
};
