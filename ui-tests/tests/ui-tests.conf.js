var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var path = require('path');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumPort: null,
    seleniumArgs: [],
    sauceUser: null,
    sauceKey: null,

    // ----- What tests to run -----
    //
    // Spec patterns are relative to the location of this config.
    specs: [
        './specs/ui_test_spec.js'
    ],

    // ----- Capabilities to be passed to the webdriver instance ----
    //
    // For a full list of available capabilities, see
    // https://code.google.com/p/selenium/wiki/DesiredCapabilities
    // and
    // https://code.google.com/p/selenium/source/browse/javascript/webdriver/capabilities.js
    capabilities: {
        browserName: 'chrome',
        logName: 'Chrome - English',
        version: '',
        platform: 'ANY',
        shardTestFiles: false,
        maxInstances: 2,
    },

    // A base URL for your application under test. Calls to protractor.get()
    // with relative paths will be prepended with this.
    baseUrl: 'http://localhost:3000/#/',

    // Set the framework
    framework: 'jasmine',

    // Selector for the element housing the angular app - this defaults to
    // body, but is necessary if ng-app is on a descendant of <body>
    rootElement: 'body',

    onPrepare: function () {
  
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: __dirname+'/qualityreports/testresults/e2e',
          takeScreenshots: true,
          takeScreenshotsOnlyOnFailures: false,
          filePrefix: 'automationReport',
          consolidate: true,
          cleanDestination: true,
          consolidateAll: true  
        })
      );
      browser.driver.manage().window().maximize();
  },

    jasmineNodeOpts: {
        // If true, print colors to the terminal.
        showColors: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 30000,
    }
};

