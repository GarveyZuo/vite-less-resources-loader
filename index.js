var sourceLoader = require('./source-loader')

let plugin = function(options) {
  this.options = options
}
plugin.prototype = {
  install: function(less, pluginManager) {
    pluginManager.addPreProcessor(new sourceLoader(this.options), 1000)
  },
  minVersion: [2, 7, 1]
}

module.exports = plugin
