const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://host.docker.internal:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
