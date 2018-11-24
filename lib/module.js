import { resolve } from 'path'

export default function nuxtWebfontloader() {
  const { webfontloader: options } = this.options

  if (!options || !Object.keys(options).length) {
    return
  }
  this.addPlugin({
    src: resolve(__dirname, 'plugin.template.js'),
    ssr: false,
    fileName: 'webfontloader.js',
    options
  })
}

module.exports.meta = require('../package.json')
