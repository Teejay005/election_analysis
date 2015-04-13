'use strict';

exports.config = {
  allScriptsTimeout: 110000,

  baseUrl: 'http://localhost:' + (process.env.PORT || '3000'),

  chromeOnly: true,

  specs: [
    'e2e/**/*.spec.js'
  ],

  exclude: [],

  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
