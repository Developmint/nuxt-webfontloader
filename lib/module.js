import { resolve } from 'path'

import pkg from '../package.json'

export default function nuxtWebfontloader(moduleOptions) {
  const options = { ...this.options.webfontloader, ...moduleOptions }

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

export { pkg as meta }
