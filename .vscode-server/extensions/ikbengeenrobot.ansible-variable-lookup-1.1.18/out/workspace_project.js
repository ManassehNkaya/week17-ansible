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
exports.WorkspaceProject = void 0;
const vscode = __importStar(require("vscode"));
const parser_1 = require("./parser");
const variable_tree_1 = require("./variable_tree");
const ansible_1 = require("./ansible");
const precedence_1 = require("./precedence");
/**
 * Represents a workspace Ansible project
 * used to lookup variables
 */
class WorkspaceProject {
    workspaceVariables = new variable_tree_1.VariableTree();
    /**
     *  Given a (normalized) variable, find all declarations of the variable
     */
    find(variable) {
        const variableParts = variable.split('.');
        const mainVariable = variableParts[0];
        if (Object.keys(this.workspaceVariables).length === 0) {
            return [];
        }
        // Determine if we have hover an ansible variable or not
        if (!(0, ansible_1.isAnsibleVariable)(mainVariable)) {
            return [];
        }
        return (0, precedence_1.sortPrecedence)(this.workspaceVariables.get(variable));
    }
    /**
     * One time parses all files in the current workspace to find variable declarations and special variables.
     * Uses hardcoded glob patterns to limit the number of files to parse based on Ansible folder and extension naming rules.
     */
    parseWorkspace() {
        // Clear old values (if present)
        this.workspaceVariables = new variable_tree_1.VariableTree();
        // Add the fixed builtin Ansible variables
        (0, parser_1.parseAnsibleBuiltin)(this.workspaceVariables);
        (0, parser_1.parseAnsibleBuiltinFilters)(this.workspaceVariables);
        // Try to reduce the amount of files found,
        // we want .yml, .yml and no extension but the latter is hard to do with glob
        const fileScanInclude = "**/*";
        const fileScanExclude = "{**/collections/**,**/venv/**,**/prererequisites/**,**/files/**,**/templates/**,**/*.md,**/*.png,**/*.zip,**/*.gz,**/*.tar}";
        vscode.workspace.findFiles(fileScanInclude, fileScanExclude).then((files) => {
            files.forEach((file) => {
                this.parseFile(file.fsPath);
            });
        });
    }
    /**
     * Parse only a single file, update occurences of variable if they already exists for the given file.
     * Can be used if a file was changed.
     * To parse a whole project use parseWorkspace().
     *
     * @param path File path as a string
     */
    parseFile(path) {
        (0, parser_1.parseYaml)(this.workspaceVariables, path);
    }
    /**
     * Remove variables from the workspace that are no longer in the workspace
     */
    deleteFile(path) {
        this.workspaceVariables.removeForFile(path);
    }
}
exports.WorkspaceProject = WorkspaceProject;
//# sourceMappingURL=workspace_project.js.map