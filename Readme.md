
# libs

This package makes loading project lib modules easier.

## Install

In package.json, you can do...

```"libs": "https://github.com/wookets/node-libs/0.2.0"```

## Usage

```
var libs = require('libs')

libs.sessionManager() // assuming this exists in {project_root}/lib/sessionManager.js
libs.route_checker() // assuming this exists in {project_root}/lib/route-checker.js
libs.routes.helper // assuming this exists in {project_root}/lib/routes/helper.js

```

With coffeescript (or Harmony destructuring)

```
{sessionManager, route_checker, routes: {helper}} = require('libs')
```

## Change log

### 0.2.0

- Usage changed.

### 0.1.1

- libs returns an array now, so that you can rename *cough* lodash *cough*

