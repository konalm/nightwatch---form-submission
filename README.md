# nightwatch---form-submission
auto form submission using Nightwatch.js

## Installation

To install the latest version globally using the npm command line tool, run the following:

  npm install -g nightwatch.

If you want to restrict it's installation to the project:
  
  npm install nightwatch

## Selenium Server

You need to have the (Java Development Kit)[http://www.oracle.com/technetwork/java/javase/downloads/index.html] installed.

The minimum version required is 7. You can check this by running `java -version` from the command line.

### Download Selenium

Download the latest version of the `selenium-server-standalong-{VERSION}.jar file form the (Downloads Page)[http://selenium-release.storage.googleapis.com/index.html]. Place this in the project's lib folder.

### Running Selenium

#### Automatically

Use the (Nightwatch Test Runner)[http://nightwatchjs.org/guide#test-runner].


### Testing 

to test nightwatch you will need a site to run it against. you can add the tests-site folder to your localhost and use it to run tests with nightwatch. The website is a basic form which nightwatch can use to automatically fill it out. 

Open up play.js in the tests folder and alter the path in the client.url('you path here') for an example of how to use nightwatch to run automatic testing. 

