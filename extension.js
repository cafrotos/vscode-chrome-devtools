require('module-alias/register')

const vscode = require('vscode');
const openDebugChrome = require('commands/openDebugChrome');
const openDevtools = require('commands/openDevtools');

/**
 * @param {vscode.ExtensionContext} context
 */
const activate = (context) => {
  context.subscriptions.push(
    vscode.commands.registerCommand("vscode-chrome-devtools.openDevtools", openDevtools),
    vscode.commands.registerCommand("vscode-chrome-devtools.openDebugChrome", openDebugChrome)
  )
}

module.exports = {
	activate
}
