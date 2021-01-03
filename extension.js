const vscode = require("vscode");
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let enhance = vscode.commands.registerCommand("enhance.enhance", function () {
    vscode.commands.executeCommand("editor.action.fontZoomIn");
    vscode.commands.executeCommand("editor.action.fontZoomIn");
    vscode.commands.executeCommand("editor.action.fontZoomIn");
  });

  let omegaEnhance = vscode.commands.registerCommand(
    "enhance.omega-enhance",
    function () {
      vscode.commands.executeCommand("editor.action.fontZoomIn");
      vscode.commands.executeCommand("editor.action.fontZoomIn");
      vscode.commands.executeCommand("editor.action.fontZoomIn");
      vscode.commands.executeCommand("editor.action.fontZoomIn");
      vscode.commands.executeCommand("editor.action.fontZoomIn");
    }
  );

  let unenhance = vscode.commands.registerCommand(
    "enhance.unenhance",
    function () {
      vscode.commands.executeCommand("editor.action.fontZoomReset");
    }
  );

  context.subscriptions.push(enhance);
  context.subscriptions.push(omegaEnhance);
  context.subscriptions.push(unenhance);
}

module.exports = {
  activate,
};
