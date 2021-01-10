const vscode = require("vscode");
function enhanceToLevel(level) {
  for (let i = 0; i < level; i++) {
    vscode.commands.executeCommand("editor.action.fontZoomIn");
  }
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let enhance = vscode.commands.registerCommand("enhance.enhance", function () {
    const { enhanceLevel } = vscode.workspace.getConfiguration("enhance");
    enhanceToLevel(enhanceLevel);
  });

  let omegaEnhance = vscode.commands.registerCommand(
    "enhance.omega-enhance",
    function () {
      const { omegaEnhanceLevel } = vscode.workspace.getConfiguration(
        "enhance"
      );
      enhanceToLevel(omegaEnhanceLevel);
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
