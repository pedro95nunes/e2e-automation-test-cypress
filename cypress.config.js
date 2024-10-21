const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

    },
    supportFile: 'cypress/support/e2e.js',
    baseUrl: 'http://localhost:3000',
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
});
