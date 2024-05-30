export default defineNuxtConfig({
  // Get all the pages, components, composables and plugins from the parent theme
  extends: ['./woonuxt_base'],
  modules: [
    '@vernaillen/wpnuxt'
  ],
  wpNuxt: {
    wordpressUrl: 'https://woo.wpnuxt.com',
    blocks: false,
    enableCache: false,
    logLevel: 4,
    generateComposables: {
      enabled: true
    }
  },

  components: [{ path: './components', pathPrefix: false }],

  /**
   * Depending on your servers capabilities, you may need to adjust the following settings.
   * It will affect the build time but also increase the reliability of the build process.
   * If you have a server with a lot of memory and CPU, you can remove the following settings.
   * @property {number} concurrency - How many pages to prerender at once
   * @property {number} interval - How long to wait between prerendering pages
   * @property {boolean} failOnError - This stops the build from failing but the page will not be statically generated
   */
  nitro: {
    prerender: {
      concurrency: 10,
      interval: 1000,
      failOnError: false,
    },
  },

  routeRules: {
    '/wp-content/**': { proxy: { to: 'https://woo.wpnuxt.com/wp-content/**' } }
  },
});
