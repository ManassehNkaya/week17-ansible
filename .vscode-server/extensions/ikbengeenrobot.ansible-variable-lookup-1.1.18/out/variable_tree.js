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
exports.VariableTree = exports.VariableValue = void 0;
const vscode = __importStar(require("vscode"));
/**
 * Simple structure for a search hit
 */
class VariableValue {
    /**
     * Absolute file path where the variable was found
     */
    filePath = "";
    /**
     * Relative file path to the workspace root folder
     */
    relativePath = "";
    /**
     * Line number were declaration starts
     */
    lineNumber = 0;
    /**
     * Optional parent object name (eg. vars,block,set_fact)
     */
    parent = "";
    /**
     * The Ansible precedence following the Ansible rules.
     * Runtime the value with the highest precedence will be used by Ansible.
     * https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_variables.html#variable-precedence-where-should-i-put-a-variable
     */
    precedence = -1;
    parsedVariable = "";
    constructor(filePath, lineNumber, value) {
        this.filePath = filePath;
        this.relativePath = vscode.workspace.asRelativePath(filePath);
        this.lineNumber = lineNumber;
        this.parsedVariable = value;
    }
    /**
     * Sometimes a variable is a dict like interface.name, in that case lookup 'name' in the dict
     */
    value(path = "") {
        const variableParts = path.split('.');
        // In case result is a dict, browse into the dict
        if (variableParts.length > 1) {
            // We already found the main variable, take the subpart
            let sub = variableParts.slice(1).join('.');
            return this.getPropertyByPath(this.parsedVariable, sub);
        }
        return this.parsedVariable;
    }
    /*
     * ChatGPT generated
     */
    valueToString(path = "") {
        const value = this.value(path);
        if (typeof value === 'string') {
            return value;
        }
        else if (Array.isArray(value)) {
            if (value.length === 0) {
                return '[]';
            }
            else if (typeof value[0] === 'string') {
                return value.join(', ');
            }
            else if (typeof value[0] === 'object') {
                return value.map((item) => JSON.stringify(item)).join(', ');
            }
            else {
                return value.toString();
            }
        }
        else if (typeof value === 'object') {
            return JSON.stringify(value);
        }
        else {
            return value.toString();
        }
    }
    /*
     * ChatGPT generated
     */
    getPropertyByPath(obj, path) {
        const keys = path.split('.');
        let current = obj;
        for (const key of keys) {
            if (!current || typeof current !== 'object') {
                return undefined; // Handle cases where the path is invalid or leads to non-object values
            }
            current = current[key];
        }
        return current;
    }
}
exports.VariableValue = VariableValue;
// A dict with the variable name as key, and a VariableValue list as value 
class VariableTree {
    variables = {};
    add(variableName, variableValue) {
        // Discard numeric results in case it tries to add arrays without parsing
        if (!isNaN(Number(variableName))) {
            return;
        }
        if (!this.variables[variableName]) {
            this.variables[variableName] = [];
        }
        this.variables[variableName].push(variableValue);
    }
    // Remove all entries coming from a given file,
    // this is usefull for refreshing vars after a file was changed and saved
    removeForFile(filePath) {
        const relativePath = vscode.workspace.asRelativePath(filePath);
        // Keep in all entry where the file path is not the given file path
        for (let [key, list] of Object.entries(this.variables)) {
            this.variables[key] = list.filter(obj => obj['relativePath'] !== relativePath);
        }
    }
    /*
     * Return a list of found variables, empty list if not found
     */
    get(variableName) {
        // In case of dicts, like interface.name, take first part as lookup 'interface'
        const variableParts = variableName.split('.');
        const mainVariable = variableParts[0];
        if (this.variables[mainVariable]) {
            return this.variables[mainVariable];
        }
        return [];
    }
}
exports.VariableTree = VariableTree;
//# sourceMappingURL=variable_tree.js.map