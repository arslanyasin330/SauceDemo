const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    projectId: "4ff94c",
    specPattern: "cypress/integration/",
    viewportWidth: 2000,
    viewportHeight: 1260,
    defaultCommandTimeout: 30000,
    experimentalSourceRewriting: false,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    env: {
      "CYPRESS_LOGIN_USERNAME": Cypress.env("CYPRESS_LOGIN_USERNAME"),
      "CYPRESS_LOGIN_PASSWORD": Cypress.env("CYPRESS_LOGIN_PASSWORD")
  }
  },
});
