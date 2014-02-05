
var fs = require('fs');
var path = require('path');

var tree = {};

function camelCase(string) {
  return string.replace( /-([a-z])/ig, function(all, letter) {
    return letter.toUpperCase();
  });
}

function walk(directory, branch) {
  var files = fs.readdirSync(directory);
  files.forEach(function(file) {
    var name = path.basename(file, path.extname(file));
    name = camelCase(name);
    file = path.join(directory, file)
    var stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      branch[name] = {};
      walk(file, branch[name]);
    } else {
      if (path.extname(file) === '.coffee' || path.extname(file) === '.js') {
        branch[name] = require(file);
      }
    }
  });
}

walk(__dirname + '/../../lib', tree);

module.exports = tree;

