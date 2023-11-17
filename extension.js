const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log('Congratulations, your extension "Spring Search" is now active!');

  console.log(
    'Congratulations, your extension "spring-documentation-easy-search" is now active!'
  );

  let disposable = vscode.commands.registerCommand(
    "spring-documentation-easy-search.springSearch",
    function () {
      vscode.env.openExternal(
        vscode.Uri.parse(
          "https://docs.spring.io/spring-framework/reference/index.html"
        )
      );
      vscode.window.showInformationMessage(
        "Opening Spring Framework documentation..."
      );
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
