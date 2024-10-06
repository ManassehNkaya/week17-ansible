"use strict";
// Code to determine variable precedence
// https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_variables.html#understanding-variable-precedence
// This can be a bit hard to determine and some errors might occur
// Also prio variable can be set to order if 2 values have the same precendence
Object.defineProperty(exports, "__esModule", { value: true });
exports.determinePrecedence = exports.sortPrecedence = void 0;
function isInventoryFile(fileNameWithoutExtension) {
    return ["hosts", "inventory"].includes(fileNameWithoutExtension);
}
// Sort VariableValue[] on precendence, values with high precedence are first ones
function sortPrecedence(variables) {
    return variables.sort((a, b) => b.precedence - a.precedence);
}
exports.sortPrecedence = sortPrecedence;
// ansible-inventory might be used to help with this, but this adds dependencies and complexity
function determinePrecedence(variable) {
    const path = variable.relativePath.replaceAll('\\', '/');
    const folders = path.split('/');
    const file = folders[folders.length - 1].split('.')[0];
    let parent = "";
    if (folders.length > 1) {
        parent = folders[folders.length - 2];
    }
    // 1 command line values (for example, -u my_user, these are not variables)
    ;
    ;
    // 2 role defaults (defined in role/defaults/main.yml)
    if (parent === "defaults" && file === "main") {
        return 2;
    }
    // 3 inventory file or script group vars
    // if (todo how to determine if it is a group section? && isInventoryFile(file)){
    //     return 3;
    // }
    // 4 inventory group_vars/all
    if (folders.includes("group_vars") && folders.includes("all") && isInventoryFile(file)) {
        return 4;
    }
    // 5 playbook group_vars/all
    if (folders.includes("group_vars") && folders.includes("all")) {
        return 5;
    }
    // 6 inventory group_vars/*
    if (folders.includes("group_vars") && !folders.includes("all") && isInventoryFile(file)) {
        return 6;
    }
    // 7 playbook group_vars/*
    if (folders.includes("group_vars") && !folders.includes("all") && !isInventoryFile(file)) {
        return 7;
    }
    // 8 inventory file or script host vars
    // Determine if inventory var is host based or group based
    // 9 inventory host_vars/*
    if (folders.includes("host_vars") && !folders.includes("all") && isInventoryFile(file)) {
        return 9;
    }
    // 10 playbook host_vars/*
    if (folders.includes("host_vars") && !folders.includes("all") && !isInventoryFile(file)) {
        return 10;
    }
    // 11 host facts / cached set_facts
    // 12 play vars
    // 13 play vars_prompt
    // 14 play vars_files
    // 15 role vars (defined in role/vars/main.yml)
    if (!folders.includes("group_vars") && !folders.includes("host_vars") && parent === "vars" && file === "main") {
        return 15;
    }
    // 16 block vars (only for tasks in block)
    if (parent === "block") {
        return 16;
    }
    // 17 task vars (only for the task)
    // TODO: save parent was task while parsing
    if (parent === "tasks") {
        return 17;
    }
    // 18 include_vars
    // TODO: Check path compares to paths in include_vars values
    // The files not called 'main' in role defaults and vars are only loaded if included with include_vars
    // So assume these are include vars
    if (!folders.includes("group_vars") && !folders.includes("host_vars") && ["defaults", "vars"].includes(parent) && file !== "main") {
        return 18;
    }
    // 19 set_facts / registered vars
    if (variable.parent.endsWith("set_fact") || variable.parent === "register") {
        return 19;
    }
    // 20 role (and include_role) params
    // TODO
    // 21 include params
    // Cannot do this statically?
    // 22 extra vars (for example, -e "user=my_user")(always win precedence)
    ;
    ;
    return 99;
}
exports.determinePrecedence = determinePrecedence;
//# sourceMappingURL=precedence.js.map