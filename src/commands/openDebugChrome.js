const cp = require('child_process');
const { CHROME_DEBUG_PORT } = require("configs");
const { getChromePath } = require("utils");

module.exports = () => {
  const chromeArgs = [
    `--remote-debugging-port=${CHROME_DEBUG_PORT}`
  ];

  const chromeProc = cp.spawn(getChromePath(), chromeArgs, {
    stdio: 'ignore',
    detached: true
  });

  chromeProc.unref();
}