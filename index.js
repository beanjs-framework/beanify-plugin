const semver = require('semver')
const kBeanifyPluginMeta = Symbol.for('beanify.plugin.meta')

module.exports = function wrapper (fn, opts = {}) {
  if (typeof fn !== 'function') {
    throw new TypeError(
      `beanify-plugin expects a function, instead got a '${typeof fn}'`
    )
  }

  const bVer = require('beanify/package.json').version
  if (!semver.satisfies(bVer, '>=3.0.2')) {
    throw new Error(
      `beanify-plugin: expected '>=3.0.2' beanify version, '${bVer}' is installed`
    )
  }

  fn[kBeanifyPluginMeta] = opts
  return fn
}
