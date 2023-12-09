const vscode = require("vscode");
const fs = require("fs");
const path = require("path");

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

  let disposableCustomClass = vscode.commands.registerCommand(
    "spring-documentation-easy-search.createEntityClass",
    async function () {
      const className = await vscode.window.showInputBox({
        prompt: "Enter class name",
      });
      if (!className) {
        vscode.window.showErrorMessage("No class name provided!");
        return;
      }

      const classContent = `@Entity\npublic class ${className} {\n\n \t@Id\n\t@GeneratedValue(strategy = GenerationType.IDENTITY)\n\tprivate Long id;   // TODO: Implement class\n\n}`;

      const folderPath = vscode.workspace.workspaceFolders
        ? vscode.workspace.workspaceFolders[0].uri.fsPath
        : null;
      if (!folderPath) {
        vscode.window.showErrorMessage("No folder is open");
        return;
      }

      const filePath = path.join(folderPath, `${className}.java`);

      fs.writeFile(filePath, classContent, "utf8", (err) => {
        if (err) {
          vscode.window.showErrorMessage("Failed to create Java class file");
          return;
        }

        const openPath = vscode.Uri.file(filePath);
        vscode.workspace.openTextDocument(openPath).then((doc) => {
          vscode.window.showTextDocument(doc);
        });
      });
    }
  );

  let disposableRepositoryClass = vscode.commands.registerCommand(
    "spring-documentation-easy-search.createRepositoryInterface",
    async function () {
      const repositoryName = await vscode.window.showInputBox({
        prompt: "Enter repository name",
      });
      if (!repositoryName) {
        vscode.window.showErrorMessage("No class name provided!");
        return;
      }

      const classContent = `@Repository\npublic interface ${repositoryName} extends JpaRepository<${repositoryName},Long>{\n\n}`;
      const folderPath = vscode.workspace.workspaceFolders
        ? vscode.workspace.workspaceFolders[0].uri.fsPath
        : null;
      if (!folderPath) {
        vscode.window.showErrorMessage("No folder is open");
        return;
      }

      const filePath = path.join(folderPath, `${repositoryName}.java`);

      fs.writeFile(filePath, classContent, "utf8", (err) => {
        if (err) {
          vscode.window.showErrorMessage("Failed to create Java class file");
          return;
        }

        const openPath = vscode.Uri.file(filePath);
        vscode.workspace.openTextDocument(openPath).then((doc) => {
          vscode.window.showTextDocument(doc);
        });
      });
    }
  );

  let disposableControllerClass = vscode.commands.registerCommand(
    "spring-documentation-easy-search.createControllerClass",
    async function () {
      const controllerName = await vscode.window.showInputBox({
        prompt: "Enter controller class name",
      });
      if (!controllerName) {
        vscode.window.showErrorMessage("No class name provided!");
        return;
      }

      const classContent = `@Controller\npublic class ${controllerName} {\n}`;
      const folderPath = vscode.workspace.workspaceFolders
        ? vscode.workspace.workspaceFolders[0].uri.fsPath
        : null;
      if (!folderPath) {
        vscode.window.showErrorMessage("No folder is open");
        return;
      }

      const filePath = path.join(folderPath, `${controllerName}.java`);

      fs.writeFile(filePath, classContent, "utf8", (err) => {
        if (err) {
          vscode.window.showErrorMessage("Failed to create Java class file");
          return;
        }

        const openPath = vscode.Uri.file(filePath);
        vscode.workspace.openTextDocument(openPath).then((doc) => {
          vscode.window.showTextDocument(doc);
        });
      });
    }
  );

  let disposableServiceClass = vscode.commands.registerCommand(
    "spring-documentation-easy-search.createServiceClass",
    async function () {
      const serviceName = await vscode.window.showInputBox({
        prompt: "Enter service class name",
      });
      if (!serviceName) {
        vscode.window.showErrorMessage("No class name provided!");
        return;
      }

      const classContent = `@Service\npublic class ${serviceName} {\n}`;
      const folderPath = vscode.workspace.workspaceFolders
        ? vscode.workspace.workspaceFolders[0].uri.fsPath
        : null;
      if (!folderPath) {
        vscode.window.showErrorMessage("No folder is open");
        return;
      }

      const filePath = path.join(folderPath, `${serviceName}.java`);

      fs.writeFile(filePath, classContent, "utf8", (err) => {
        if (err) {
          vscode.window.showErrorMessage("Failed to create Java class file");
          return;
        }

        const openPath = vscode.Uri.file(filePath);
        vscode.workspace.openTextDocument(openPath).then((doc) => {
          vscode.window.showTextDocument(doc);
        });
      });
    }
  );

  context.subscriptions.push(disposable);
  context.subscriptions.push(disposableCustomClass);
  context.subscriptions.push(disposableRepositoryClass);
  context.subscriptions.push(disposableControllerClass);
  context.subscriptions.push(disposableServiceClass);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
