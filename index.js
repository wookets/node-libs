
module.exports = function(modules) {
  var found = [];
  modules.split(' ').forEach(function(mod) {
    try {
      found.push(require(mod));
    } catch (err) {
      if (err.code === 'MODULE_NOT_FOUND') {
        found.push(require('../../lib/' + mod));
      }
    }
  });
  return found;
}