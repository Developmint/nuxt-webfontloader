# Nuxt Webfontloader - Efficient web font loading has never been easier!
 
[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-webfontloader/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-webfontloader)
[![npm](https://img.shields.io/npm/dt/nuxt-webfontloader.svg?style=flat-square)](https://npmjs.com/package/nuxt-webfontloader)
[![Build Status](https://travis-ci.com/Developmint/nuxt-webfontloader.svg?branch=master)](https://travis-ci.com/Developmint/nuxt-webfontloader)
[![codecov](https://codecov.io/gh/Developmint/nuxt-webfontloader/branch/master/graph/badge.svg)](https://codecov.io/gh/Developmint/nuxt-webfontloader)
[![Dependencies](https://david-dm.org/Developmint/nuxt-webfontloader/status.svg?style=flat-square)](https://david-dm.org/Developmint/nuxt-webfontloader)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)
 [![thanks](https://img.shields.io/badge/thanks-%E2%99%A5-ff69b4.svg)](https://thanks.lichter.io/)

>

[📖 **Release Notes**](./CHANGELOG.md)

## Features

* Full support of SVGs as components. Import them like your Vue SFCs
* Built on top of Google's/Typekit's [webfontloader](https://www.npmjs.com/package/webfontloader)
* Improves site performance by loading web-fonts asynchronously
* Nuxt 2 (and only Nuxt 2) support
* Fully tested!

## Setup

- Add `nuxt-webfontloader` as a dependency using yarn or npm to your project
- Add `nuxt-webfontloader` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    'nuxt-webfontloader',
  ],
}
```

- Include your webfontloader options in the `nuxt.config.js`, for example: 

```js
export default {
  webfontloader: {
    google: {
      families: ['Lato:400,700'] //Loads Lato font with weights 400 and 700
    }
  },
}

```

- Remove old stylesheets from your app template or `nuxt.config.js` head part:

```js
export default {
  head:{
    link: [
      // You don't need that line anymore!
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700' }
    ]
  }
}
```

## Development

- Clone this repository
- Install dependencies using `yarn install` or `npm install`
- Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Alexander Lichter
