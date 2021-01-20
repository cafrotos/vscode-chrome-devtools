const os = require('os');
const fs = require('fs');
const { PLATFORM, CHROME_PATH, CHROME_DEVTOOLS_PATH } = require('configs');

module.exports.getPlatform = () => {
  switch (os.platform()) {
    case "darwin": return PLATFORM.OSX;
    case "win32": return PLATFORM.WINDOWS;
    default: return PLATFORM.LINUX;
  }
}

module.exports.getChromePath = () => {
  switch (os.platform()) {
    case PLATFORM.Linux: return fs.existsSync(CHROME_PATH.LINUX) ? CHROME_PATH.LINUX : ""
    case PLATFORM.OSX: return fs.existsSync(CHROME_PATH.OSX) ? CHROME_PATH.OSX : ""
    case PLATFORM.Windows:
      if (fs.existsSync(CHROME_PATH.WINx86)) {
        return CHROME_PATH.WINx86;
      }
      else if (fs.existsSync(CHROME_PATH.WIN)) {
        return CHROME_PATH.WIN;
      }
      else if (fs.existsSync(CHROME_PATH.WIN_LOCALAPPDATA)) {
        return CHROME_PATH.WIN_LOCALAPPDATA;
      }
      else {
        return '';
      }
    default: return fs.existsSync(CHROME_PATH.LINUX) ? CHROME_PATH.LINUX : ""
  }
}

module.exports.getWebviewContent = () => (
  `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>VSCode Chrome Devtools</title>
        <style>
          * {
            box-sizing: border-box;
          }
          html,body {
            width: 100vw;
            height: 100vh;
          }
          body {
            padding: 0;
            margin: 0;
            background-color: white;
            color: black;
          }
        </style>
    </head>
    <body>
      <iframe id="devtools" width="100%" height="100%" src="${CHROME_DEVTOOLS_PATH}"></iframe>
    </body>
    </html>
  `
)