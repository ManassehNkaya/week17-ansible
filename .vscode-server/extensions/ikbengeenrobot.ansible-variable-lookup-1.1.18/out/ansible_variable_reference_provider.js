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
exports.AnsibleVariableReferenceProvider = void 0;
const vscode = __importStar(require("vscode"));
const fs = __importStar(require("fs"));
const ansible_1 = require("./ansible");
class AnsibleVariableReferenceProvider {
    static fileScanInclude = "{**/templates/**/*,**/*.yml,**/*.YML, **/*.yaml}";
    static fileScanExclude = "{**/collections/**,**/venv/**,**/files/**,**/*.md,**/*.png,**/*.zip,**/*.gz,**/*.tar,**/*.tgz}";
    async provideReferences(document, position, options, token) {
        const wordRange = document.getWordRangeAtPosition(position);
        const selectedWord = document.getText(wordRange);
        const variableName = selectedWord.replace(/:$/, "");
        if (!(0, ansible_1.isAnsibleVariable)(variableName)) {
            return [];
        }
        const allReferences = [];
        const files = await vscode.workspace.findFiles(AnsibleVariableReferenceProvider.fileScanInclude, AnsibleVariableReferenceProvider.fileScanExclude);
        // Asyncronously search for references in all selected files
        // But wait for all to finish before continuing
        await Promise.all(files.map((file) => this.getReferences(file, variableName, allReferences)));
        return allReferences;
    }
    async getReferences(file, variable, references) {
        // console.log(`Searching for references in ${file.fsPath}`);
        const doc = await fs.promises.readFile(file.fsPath, 'utf8');
        const regex = new RegExp(`\\b${variable}\\b(:?)`);
        const lines = doc.split('\n');
        for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
            const lineText = lines[lineIndex];
            const match = lineText.match(regex);
            if (match && match.index !== undefined) {
                // Determine if the match is a declaration or a reference
                const isDeclaration = match[1] === ":";
                // Skip declaration of variable, but not if it is something like this:
                //
                // mydict:
                //   varname: "{{ varname }}"
                //
                // So if it occures twice, assume the second is a reference
                if (!isDeclaration || (isDeclaration && countWordInLine(lineText, variable) >= 2)) {
                    // Offset index by 1 to account for the space or quote character
                    const reference = new vscode.Location(file, new vscode.Position(lineIndex, match.index + 1));
                    references.push(reference);
                }
            }
        }
        // Count the number of times a word appears in a line
        function countWordInLine(line, word) {
            const regex = new RegExp(`\\b${word}\\b`, 'g'); // 'g' flag for global search
            // Assert that the regex is working
            // const test_two_hits = "varname: {{ varname }}".match(regex);
            // assert(test_two_hits !== null && test_two_hits.length === 2);
            // const test_one_hit = "varname: {{ varnames }}".match(regex);
            // assert(test_one_hit !== null && test_one_hit.length === 1);
            const matches = line.match(regex);
            return matches ? matches.length : 0;
        }
        // console.log(`Found ${references.length} references in ${file.fsPath}`);
    }
}
exports.AnsibleVariableReferenceProvider = AnsibleVariableReferenceProvider;
//# sourceMappingURL=ansible_variable_reference_provider.js.map