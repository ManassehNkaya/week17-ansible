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
exports.normalizeVariable = exports.isInventoryFile = exports.isAnsibleFile = exports.isAnsibleVariable = void 0;
const path = __importStar(require("path"));
// Words not to lookup as variables
const keywords = new Set(["bool", "ansible", "builtin", "item", "false", "true", "str", "when", "include", "loop_control", "with_items", "vars", "hosts", "False", "await", "else", "import", "pass", "None", "break", "except", "in", "raise", "True", "class", "finally", "is", "return", "and", "continue", "for", "lambda", "try", "as", "def", "from", "nonlocal", "while", "assert", "del", "global", "not", "with", "async", "elif", "if", "or", "yield", "name", "tasks"]);
// Check if valid characters for a variable
// must start with a character or _, followed by any valid char
const validNameRegex = /^[a-zA-Z_]{1}[a-zA-Z0-9_\.]+$/;
/*
 * Try to determine if a word might be an ansible variable
 * Used for determining if we need to enable the hover
 */
function isAnsibleVariable(variable) {
    const normalized = normalizeVariable(variable);
    return normalized !== null && !keywords.has(normalized) && !normalized.startsWith("ansible.builtin.") && validNameRegex.test(normalized);
}
exports.isAnsibleVariable = isAnsibleVariable;
// Try to determine if a file is an Ansible file
function isAnsibleFile(filePath) {
    filePath = filePath.toLocaleLowerCase();
    const fileName = path.basename(filePath);
    const extension = path.extname(filePath);
    const hiddenFile = fileName.startsWith(".");
    if (hiddenFile) {
        return false;
    }
    if (isInventoryFile(filePath)) {
        return true;
    }
    if (extension === ".yml" || extension === ".yaml") {
        return true;
    }
    // In group_vars or host_vars the following is valid Ansible, no extension, yml, yaml or json (or even ini but no support yet in this extension)
    if ((extension === "" || extension === ".json") && (filePath.includes("host_vars") || filePath.includes("group_vars"))) {
        return true;
    }
    // All other is not an Ansible file
    return false;
}
exports.isAnsibleFile = isAnsibleFile;
// Try to determine if a file is an inventory file
function isInventoryFile(filePath) {
    const fileName = path.basename(filePath).split(".")[0];
    return ["hosts", "inventory"].includes(fileName);
}
exports.isInventoryFile = isInventoryFile;
// Normalize variable to dot notation and trim qoutes
function normalizeVariable(input) {
    // Skip filters after variable
    const skipFilter = input.split('|')[0];
    // Rewrite var['sub'] or var["sub"] to var.sub
    const dotNotation = skipFilter.replace(/\[['"]([^'"]+)['"]]/g, '.$1');
    // "my_var" or 'my_var' to my_var
    // trim ending ':'
    const trimmedNotation = dotNotation.replace(/^["'\s+]/, '').replace(/["':\s+]$/, '');
    return trimmedNotation;
}
exports.normalizeVariable = normalizeVariable;
//# sourceMappingURL=ansible.js.map