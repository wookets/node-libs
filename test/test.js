
assert = require('assert');

describe('libs', function() {

  it('should read in libs', function() {
    var libs = require('./node_modules/libs');
    console.log('libs', libs);
    assert.equal(libs.meow, 'meow');
    assert.equal(libs.pants, 'pants');
    assert.equal(libs.pantsMan, 'pants-man');
    //assert.equal(libs.some_file, 'dotfile');
    assert.equal(libs.subDir, 'subdir');
  });

})
