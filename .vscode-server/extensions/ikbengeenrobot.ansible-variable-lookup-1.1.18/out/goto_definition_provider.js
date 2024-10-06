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
exports.GotoDefinitionProvider = void 0;
const vscode = __importStar(require("vscode"));
const extension_1 = require("./extension");
class GotoDefinitionProvider {
    async provideDefinition(document, position, token) {
        const selectedWord = document.getText(document.getWordRangeAtPosition(position));
        const variableName = selectedWord.replace(/:$/, "");
        const results = extension_1.project.find(variableName);
        const locations = results.map(result => {
            return new vscode.Location(vscode.Uri.file(result.filePath), new vscode.Range(result.lineNumber - 1, 0, result.lineNumber, 0));
        });
        return locations;
    }
}
exports.GotoDefinitionProvider = GotoDefinitionProvider;
//# sourceMappingURL=goto_definition_provider.js.map