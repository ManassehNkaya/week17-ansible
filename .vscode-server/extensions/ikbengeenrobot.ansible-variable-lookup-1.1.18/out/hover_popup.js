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
exports.HoverPopup = void 0;
const vscode = __importStar(require("vscode"));
const ansible_1 = require("./ansible");
class HoverPopup {
    project;
    settings;
    constructor(project, settings) {
        this.project = project;
        this.settings = settings;
    }
    /**
     * Format a popup to show on hovering a given location.
     *
     * @param document
     * @param position
     * @returns
     */
    createPopup(document, position) {
        // Get the hovered word
        const hoveredWord = (0, ansible_1.normalizeVariable)(document.getText(document.getWordRangeAtPosition(position)));
        const results = this.project.find(hoveredWord);
        // Nothing found
        if (results.length === 0) {
            return undefined;
        }
        // Format a markdown table
        const message = new vscode.MarkdownString();
        message.appendMarkdown("|   |   |   |\n");
        message.appendMarkdown("| - | - | - |\n");
        // Format message
        results.forEach(result => {
            let locationText = "";
            if (this.isHoveringItself(document, position, result)) {
                locationText = "here";
            }
            else {
                const trunctatedLink = this.truncate(result['relativePath'], this.settings.truncateHoverLinkLength, '...');
                locationText = `[${trunctatedLink}](file:${result.filePath}#${result.lineNumber})`;
            }
            let precedenceText = `[*](estimated_precendence_${result.precedence})`;
            if (result.precedence > 30) {
                precedenceText = `[*](estimated_precendence_unkown)`;
            }
            // Give the hoveredWord, such that in case of dict, we can browse into the variable
            let value = result.valueToString(hoveredWord);
            // Skip if we hover the declaration itself if there are no other declarations
            if (results.length === 1 && this.isHoveringItself(document, position, results[0])) {
                message.appendMarkdown(`| ${precedenceText} | Variable only | in ${locationText} |\n`);
                return new vscode.Hover(message);
            }
            // For builtin variables, do no truncate, we also have only one result, so room enough
            if (result.filePath === 'special_variables') {
                const formattedValue = result.value().replaceAll('`', '\\`').replaceAll('|', '\\|');
                message.appendMarkdown(`| | \`${formattedValue}\` | in [ansible special](https://docs.ansible.com/ansible/latest/reference_appendices/special_variables.html) | |\n`);
            }
            else if (result.filePath === 'filter') {
                const formattedValue = result.value().replaceAll('`', '\\`').replaceAll('|', '\\|');
                message.appendMarkdown(`| | \`${formattedValue}\` | in [ansible filter](https://docs.ansible.com/ansible/latest/collections/index_filter.html) | |\n`);
            }
            else if (result.parent === "register") {
                message.appendMarkdown(`| ${precedenceText} | Registered variable | in ${locationText} |\n`);
            }
            else if (value.startsWith("$ANSIBLE_VAULT;")) {
                const tail = value.trimEnd().substring(value.length - 3);
                message.appendMarkdown(`| ${precedenceText} | **vault encrypted** [...${tail}] | in ${locationText} |\n`);
            }
            else {
                const escaped = value.replaceAll('`', '\\`').replaceAll('|', '\\|');
                const formatted = this.truncate(escaped, this.settings.truncateHoverValueLength, '` ... `');
                message.appendMarkdown(`| ${precedenceText} | \`${formatted}\` | in ${locationText} |\n`);
            }
        });
        return new vscode.Hover(message);
    }
    /*
     * Are we hovering the variable definition itself?
     */
    isHoveringItself(document, position, variable) {
        const hoveredFile = vscode.workspace.asRelativePath(document.fileName);
        return variable.relativePath === hoveredFile && variable.lineNumber === position.line + 1;
    }
    /*
     * Truncate a string to max length by removing the middle part and replace it with a given filler string
     */
    truncate(str, maxLength, filler = '...') {
        if (str.length <= maxLength) {
            return str; // no need to truncate
        }
        const truncatedLength = maxLength - filler.length;
        const beginning = str.slice(0, Math.ceil(truncatedLength / 2));
        const end = str.slice(str.length - Math.floor(truncatedLength / 2));
        // Return the concatenated string with the filler in the middle
        return `${beginning}${filler}${end}`;
    }
}
exports.HoverPopup = HoverPopup;
//# sourceMappingURL=hover_popup.js.map