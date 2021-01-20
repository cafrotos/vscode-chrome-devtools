const vscode = require('vscode');
const { getWebviewContent } = require('utils');

module.exports = async () => {
  const currentPanel = vscode.window.createWebviewPanel(
    'vscode-chrome-devtools',
    'VSCode Chrome Devtools',
    vscode.ViewColumn.Beside,
    {
      enableScripts: true,
      retainContextWhenHidden: true
    }
  );
  currentPanel.webview.html = getWebviewContent();
}