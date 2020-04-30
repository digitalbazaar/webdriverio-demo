```
npm install @wdio/cli
# yes option selects all the local testing defaults using chromedriver
npx wdio config --yes
mkdir -p test/specs

# add standard mocha spec to /test/specs folder

# config file created above can be modified to change browser/test folder etc.
npx wdio run wdio.conf.js
```

### Visual Regression Checks
There are plugins for applitools that allows screenshots to be uploaded to
a service that can compare images to check for visual regressions.

### Integrations
- SauceLabs

### Trivia
- Owned by OpenJS Foundation along with nodejs and webpack.
- Possible to access dev tools via chromedriver and make assertions about
  number of files being downloaded etc.
  - Can be used to check HTTP status/headers for requests
- Supports Appium for mobile apps (non-web apps)
- There is an `addCommand` API which can, for instance, be used to make
  a POST request using `axios` or any other code/libs. This can be useful
  in setting up state for the test like authentication.
- Multiremote feature allows for testing multiple browsers simultaneously.
  - Ensure state changes update/track between browsers/tab
  - Chat Application (test two users chatting)

### Learning
- Sync vs Async Mode
  - https://webdriver.io/docs/sync-vs-async.html
  - Sync mode works by wrapping every browser/element with `fibers`.
  - Fibers API is obsolete according to maintainer, so best to use async style.
  - https://github.com/laverdet/node-fibers
- https://webdriver.io/docs/gettingstarted.html
- https://youtu.be/jOmvPpzLMf8

### Setup
- Using selenium-standalone requires java
  - sudo apt install default-jre
