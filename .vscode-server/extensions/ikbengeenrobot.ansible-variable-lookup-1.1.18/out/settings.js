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
exports.Settings = void 0;
const vscode = __importStar(require("vscode"));
const defaultEnableOnLanguages = ['yaml', 'ansible', 'shellscript', 'jinja', 'ansible-jinja'];
/**
 * Load settings, settings should be declared in package.json under the contributes/configuration section.
 */
class Settings {
    enableHover = true;
    enableOnLanguages = defaultEnableOnLanguages;
    truncateHoverLinkLength = 40;
    truncateHoverValueLength = 80;
    constructor() {
        this.load();
        this.listen();
    }
    load() {
        const config = vscode.workspace.getConfiguration("ansible-variable-lookup");
        this.enableHover = config.get('enableHover', true);
        this.truncateHoverLinkLength = config.get('truncateHoverLinkLength', 40);
        this.truncateHoverValueLength = config.get('truncateHoverValueLength', 80);
        this.enableOnLanguages = config.get('enableOnLanguages', `${defaultEnableOnLanguages}`).split(',').map(s => s.trim());
    }
    listen() {
        vscode.workspace.onDidChangeConfiguration(event => {
            this.load();
        });
    }
}
exports.Settings = Settings;
//# sourceMappingURL=settings.js.map