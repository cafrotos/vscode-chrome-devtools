const path = require('path');

const CHROME_DEBUG_PORT = "9222"

module.exports.CHROME_DEBUG_PORT = CHROME_DEBUG_PORT;
module.exports.CHROME_DEVTOOLS_PATH = `http://localhost:${CHROME_DEBUG_PORT}`;
module.exports.CHROME_PATH = {
  LINUX: '/usr/bin/google-chrome',
  OSX: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  WIN: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  WIN_LOCALAPPDATA: path.join(process.env.LOCALAPPDATA || '/', 'Google\\Chrome\\Application\\chrome.exe'),
  WINx86: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
}
module.exports.PLATFORM = {
  LINUX: "LINUX",
  WINDOWS: "WINDOWS",
  OSX: "OSX"
}