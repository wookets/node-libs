
var fs = require('fs');
var path = require('path');

var libs = {};

var directory = __dirname + '/../../lib';
var files = fs.readdirSync(directory);
files.forEach(function(file) {
  // strip file extension
  var name = path.basename(file, path.extname(file));
  // replace - with snakeCase
  name = name.replace(/-([a-z])/ig, function(all, letter) {return letter.toUpperCase();});
  // replace . with _
  //name = name.replace(/\./ig, '_');
  // use full path for require
  file = path.join(directory, file);
  libs[name] = require(file);
});

module.exports = libs;
