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
const assert = __importStar(require("assert"));
const vscode = __importStar(require("vscode"));
const parser = __importStar(require("../parser"));
const ansible = __importStar(require("../ansible"));
const variable_tree_1 = require("../variable_tree");
const ansible_variable_reference_provider_1 = require("../ansible_variable_reference_provider");
function lookup(tree, key) {
    return tree.get(key)[0].value(key);
}
// NOT WORKING, I cannot figure out how to test async methods
suite('Extension Test Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');
    test('Parse yaml', async () => {
        const tree = new variable_tree_1.VariableTree();
        await parser.parseYaml(tree, '../../src/test/test_vars.yml');
        assert.strictEqual("a sample string", lookup(tree, 'string_var'));
        assert.strictEqual(42, lookup(tree, 'number_var'));
        assert.strictEqual("a dict with field name", lookup(tree, 'dict_var.name'));
        assert.deepEqual([0, 1, 2], lookup(tree, 'list_var'));
        await parser.parseYaml(tree, '../../src/test/test_vars_roleplay.yml');
        assert.strictEqual("value defined in a vars block", lookup(tree, 'vars_var'));
        assert.strictEqual("value defined in a vars block that is in a block section", lookup(tree, 'in_block_nested_vars'));
    });
    test('Normalize variable', () => {
        assert.strictEqual(ansible.normalizeVariable("my_var:"), "my_var");
        assert.strictEqual(ansible.normalizeVariable("dict['sub']"), "dict.sub");
        assert.strictEqual(ansible.normalizeVariable('dict["sub"]'), "dict.sub");
        assert.strictEqual(ansible.normalizeVariable(" whitespace "), "whitespace");
        assert.strictEqual(ansible.normalizeVariable(" variable_without_filter | filter "), "variable_without_filter");
    });
    test('Is variable int', () => {
        assert.strictEqual(ansible.isAnsibleVariable("123"), false);
    });
    test('Is variable underscore', () => {
        assert.strictEqual(ansible.isAnsibleVariable("my_number"), true);
    });
    test('Is variable dash', () => {
        assert.strictEqual(ansible.isAnsibleVariable("my-number"), false);
    });
    test('Is variable dict', () => {
        assert.strictEqual(ansible.isAnsibleVariable("my_dict.sub.item"), true);
    });
    test('Is variable keyword', () => {
        assert.strictEqual(ansible.isAnsibleVariable("hosts"), false);
        assert.strictEqual(ansible.isAnsibleVariable("ansible"), false);
    });
    test('IsAnsibleFile', () => {
        assert.strictEqual(ansible.isAnsibleFile("/myproject/group_vars/noext"), true);
        assert.strictEqual(ansible.isAnsibleFile("/myproject/group_vars/subfolder/noext"), true);
        assert.strictEqual(ansible.isAnsibleFile("group_vars/noext"), true);
        assert.strictEqual(ansible.isAnsibleFile("group_vars/all/main.yml"), true);
        assert.strictEqual(ansible.isAnsibleFile("group_vars/all/main.json"), true);
        assert.strictEqual(ansible.isAnsibleFile("host_vars/my_host"), true);
        assert.strictEqual(ansible.isAnsibleFile("main.yml"), true);
        assert.strictEqual(ansible.isAnsibleFile("main.YML"), true);
        assert.strictEqual(ansible.isAnsibleFile("main.yaml"), true);
        assert.strictEqual(ansible.isAnsibleFile("random_name.yml"), true);
        assert.strictEqual(ansible.isAnsibleFile("hosts"), true);
        assert.strictEqual(ansible.isAnsibleFile("HOSTS"), true);
        assert.strictEqual(ansible.isAnsibleFile("inventory"), true);
        assert.strictEqual(ansible.isAnsibleFile("main"), false);
        assert.strictEqual(ansible.isAnsibleFile(".hidden.yml"), false);
        assert.strictEqual(ansible.isAnsibleFile("random.json"), false);
        assert.strictEqual(ansible.isAnsibleFile("readme.md"), false);
        assert.strictEqual(ansible.isAnsibleFile("main.txt"), false);
    });
    test('AnsibleVariableReferenceProvider.getReferences.simple', async () => {
        const provider = new ansible_variable_reference_provider_1.AnsibleVariableReferenceProvider();
        const references = [];
        await provider.getReferences(vscode.Uri.file('../../src/test/test_vars_references.yml'), 'string_var', references);
        assert.strictEqual(references.length, 1);
    });
    test('AnsibleVariableReferenceProvider.getReferences.keyEqualsTemplate', async () => {
        const provider = new ansible_variable_reference_provider_1.AnsibleVariableReferenceProvider();
        // This can give issues, because 'var:' is excluded as it is a definition, but 'var: var' should be included
        const references = [];
        await provider.getReferences(vscode.Uri.file('../../src/test/test_vars.yml'), 'key_is_same_as_template', references);
        assert.strictEqual(references.length, 1);
    });
});
//# sourceMappingURL=extension.test.js.map