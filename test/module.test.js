const getPort = require('get-port')
const { Nuxt, Builder } = require('nuxt-edge')

jest.setTimeout(60 * 1000)

let nuxt, port

const url = route => 'http://localhost:' + port + route

describe('nuxt-webfontloader', () => {
  test('loads fonts properly', async () => {
    nuxt = await setupNuxt(require('./fixture/configs/default'))

    const window = await nuxt.server.renderAndGetWindow(url('/'))
    await new Promise(resolve => setTimeout(resolve, 2500))

    expect(window._fontsAreLoading).toBe(true)

    const htmlClasses = Array.from(window.document.documentElement.classList)
    expect(htmlClasses).toEqual(expect.arrayContaining(['wf-loading', 'wf-lato-n4-loading', 'wf-lato-n7-loading']))
  })

  afterEach(async () => {
    if (nuxt) {
      await nuxt.close()
    }
  })
})

const setupNuxt = async (config) => {
  const nuxt = new Nuxt(config)
  await new Builder(nuxt).build()
  port = await getPort()
  await nuxt.listen(port)

  return nuxt
}
