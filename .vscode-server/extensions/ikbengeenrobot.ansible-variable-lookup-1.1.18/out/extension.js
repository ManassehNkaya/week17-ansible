"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = exports.project = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __importStar(require("vscode"));
const workspace_project_1 = require("./workspace_project");
const hover_popup_1 = require("./hover_popup");
const goto_definition_provider_1 = require("./goto_definition_provider");
const ansible_variable_reference_provider_1 = require("./ansible_variable_reference_provider");
const settings_1 = require("./settings");
const settings = new settings_1.Settings();
exports.project = new workspace_project_1.WorkspaceProject();
const hover = new hover_popup_1.HoverPopup(exports.project, settings);
// This method is called when your extension is activated,
// activation conditions are set in the 'package.json' file
function activate(context) {
    // Initially parse all variables
    exports.project.parseWorkspace();
    // On a save action of a yaml file, reload the variables of that document
    let yamlFileSaved = vscode.workspace.onDidSaveTextDocument((document) => {
        exports.project.parseFile(document.uri.fsPath);
    });
    // On a delete action of a yaml file, remove the variables of that document
    let yamlFilesDeleted = vscode.workspace.onDidDeleteFiles((document) => {
        for (const file of document.files) {
            exports.project.deleteFile(file.fsPath);
        }
    });
    // Register a hover for yaml files
    let hoverProvider = vscode.languages.registerHoverProvider(settings.enableOnLanguages, {
        provideHover(document, position, token) {
            if (settings.enableHover === false) {
                return undefined;
            }
            return hover.createPopup(document, position);
        }
    });
    context.subscriptions.push(yamlFileSaved);
    context.subscriptions.push(yamlFilesDeleted);
    context.subscriptions.push(hoverProvider);
    const gotoProvider = new goto_definition_provider_1.GotoDefinitionProvider();
    const referenceProvider = new ansible_variable_reference_provider_1.AnsibleVariableReferenceProvider();
    settings.enableOnLanguages.forEach(language => {
        context.subscriptions.push(vscode.languages.registerDefinitionProvider(language, gotoProvider));
        context.subscriptions.push(vscode.languages.registerReferenceProvider(language, referenceProvider));
    });
    if (settings.enableHover === true) {
        vscode.window.showInformationMessage(`Activated Ansible Variable Lookup extension. Popup feature is enabled in settings.`);
    }
    else {
        vscode.window.showInformationMessage(`Activated Ansible Variable Lookup extension. Popup feature is currently disable in the settings. Use the contect menu to show results.`);
    }
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map