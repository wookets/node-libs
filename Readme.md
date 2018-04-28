
# libs

[![Greenkeeper badge](https://badges.greenkeeper.io/wookets/node-libs.svg)](https://greenkeeper.io/)

It makes loading local project lib node_modules easier.

## Install

In package.json, you can do...

```"libs": "https://github.com/wookets/node-libs/0.4.0"```

## Usage

```
var libs = require('libs');
libs.directory('./lib'); // loads everything in this directory into the libs, only need to call once

libs.sessionManager() // assuming this exists in {directory}/sessionManager.js
libs.routeChecker() // assuming this exists in {directory}/route-checker.js
libs.routes // assuming this exists in {directory}/routes/index.js and you have an index file
```

With coffeescript (or Harmony destructuring)

```
{sessionManager, routeChecker, routes: {helper}} = require('libs')
```

## Change log

### 0.4.0
- added a directory method so you can set load a directory or many directories if needed

### 0.3.0
- removed recursion, because let's keep things simple and you lib should be decently flat anyway

### 0.2.0

- Usage changed.

### 0.1.1

- libs returns an array now, so that you can rename *cough* lodash *cough*

