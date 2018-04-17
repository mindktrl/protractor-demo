## Summary

    This project contains the Protractor/Selenium tests used to browser test the www.4gclinical.com help section

## Scenarios

    It should display sign in help page when searching for sign in

    It should allow user to submit a support ticket

# Setup & Run tests: 

    Clone the repo

## Note: You need Node.js already installed

## cd into 

    /ui-tests

## In terminal (Gitbash), run

    npm install

## Start Selenium Server by running this

    webdriver-manager start 

## cd into

    /tests

## Run protractor tests with:

    protractor ui-tests.conf.js

## Test Reports

    Test execution reports for pass/fails go here

        ..\\ui-tests\tests\qualityreports\testresults\e2e\htmlReport.html

## Screenshots

    Go here

        ..\\ui-tests\tests\qualityreports\testresults\e2e\screenshots

## VS Code Debugging

    Open VS Code debugging

        Select `Launch Protractor` from DEBUG dropdown, then click Start button to debug

## Here are instructions on how to install all dependencies from scratch (if you have problems installing via package.json):

    Open terminal (Gitbash) in this directory: 
        ui-tests

## Use npm to install Protractor with:

    npm install protractor --save-dev

## This will install two command line tools, protractor and webdriver-manager. Try running

    protractor --version

## The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

    webdriver-manager update

## Install reporting with 

    npm install protractor-jasmine2-html-reporter

## Now start up a server with

    webdriver-manager start

## cd into

    /tests

## Run protractor tests with:

    protractor ui-tests.conf.js

## Credit

    MindKtrl
