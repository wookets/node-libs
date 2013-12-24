
module.exports = function(modules) {
  var found = {};
  modules.split(' ').forEach(function(mod) {
    try {
      found[mod] = require(mod);
    } catch (err) {
      if (err.code === 'MODULE_NOT_FOUND') {
        found[mod] = require('../../lib/' + mod);
      }
    }
  });
  return found;
}