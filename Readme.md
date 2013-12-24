
# Libs (aka node-libs, aka paw-libs)

This is a very simple module which does two things;

1. It allows you to make any require() statements from a single line.
2. It looks in a top level 'lib' folder for local based node modules.

## Install

In package.json you can do...

```"libs": "git://github.com/wookets/node-libs.git#master"```

## Usage

### Multiple requires on one line

```
var libs = require('libs')('lodash express request')
```

With coffeescript (or Harmony destructuring)

```
{_, express, request} = require('libs')('lodash express request')
```


### Local node modules

Assumes your project specific libraries are in...
{project}/lib/awesome-sauce.js

Then just...

```
var myLocalAwesomeNodeModule = require('libs')('awesome-sauce');
```

## Why?

I structure my node projects

{root}
- node_modules - vendor specific packages
- test - test classes
- scripts - migration scripts or batch jobs
- server - server code
- static - static file serving
- lib - project specific libraries that may be private, but will only be used within this specific project and don't warrant a seperate project (this is where paw-lib pulls from)