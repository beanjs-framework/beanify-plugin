const semver = require('semver')
const kBeanifyPluginMeta = Symbol.for('beanify.plugin.meta')

module.exports = function wrapper (fn, opts = {}) {
  if (typeof fn !== 'function') {
    throw new TypeError(
      `beanify-plugin expects a function, instead got a '${typeof fn}'`
    )
  }

  const bVer = require('beanify/package.json').version
  const dVer = '>=3.0.4'
  if (!semver.satisfies(bVer, dVer)) {
    throw new Error(
      `beanify-plugin: expected '${dVer}' beanify version, '${bVer}' is installed`
    )
  }

  fn[kBeanifyPluginMeta] = opts
  return fn
}
