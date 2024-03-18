const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://host.docker.internal:3000',
    // baseUrl: 'https://laudable-rhinoceros-fbd883.instawp.xyz/',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
