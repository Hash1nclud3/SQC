// Mock DB layer to keep this repo self-contained (no real DB needed to demonstrate SQLi sinks)
module.exports = {
  query: function (sql, callback) {
    console.log('Executing raw SQL (VULNERABLE - no parameterization):', sql);
    callback(null, [{ id: 1, name: 'mock-result' }]);
  }
};
