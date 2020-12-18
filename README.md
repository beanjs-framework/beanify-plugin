# beanify-plugin

beanify-plugin is a plugin helper for Beanify.

`beanify>=3.0.2`

## Install

```bash
npm install beanify-plugin --save
```

with yarn

```
yarn add beanify-plugin
```

## Usage

```javascript
const bp = require('beanify-plugin')

module.exports = bp(function (beanify, opts, next) {
  // your plugin code
  next()
}, meta)

// async await

module.exports = bp(async function (beanify, opts) {
  // your plugin code
}, meta)
```

### Metadata

- **name**: when you set value, register creates a new scope.
- **prefix**: the new scope `route` prefix.The prefix of the parent will be inherited
- **beanify**: Used to detect the current beanify version
