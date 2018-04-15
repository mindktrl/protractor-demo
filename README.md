## Summary
This project contains the Protractor/Selenium tests used to browser test the 4gclinical.com Front End.

## Setup
## Use npm to install Protractor with:

    npm install protractor --save-dev

##This will install two command line tools, protractor and webdriver-manager. Try running

    protractor --version

## The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

    webdriver-manager update

## Install reporting with 

    npm install protractor-jasmine2-html-reporter

## Now start up a server with

    webdriver-manager start

## Test Execution

Open your terminal i.e. 'Git Bash' here:

    ..\\ui-tests\tests

# Run protractor tests with:

    protractor ui-tests.conf.js

# Test Reports
Test execution reports for pass/fails go here

    ..\\ui-tests\tests\qualityreports\testresults\e2e\htmlReport.html

# VS Code Debugging
Open VS Code debugging, click settings icon to open launch.json
Add this

        {
			"name": "Launch Protractor",
			"type": "node",
			"request": "launch",
			"program": "${workspaceRoot}/ui-tests/node_modules/protractor/bin/protractor",
			"stopOnEntry": false,
			"args": ["${workspaceRoot}/ui-tests/tests/ui-tests.conf.js"],
		},

Select `Launch Protractor` from DEBUG dropdown, then click Start button to debug


