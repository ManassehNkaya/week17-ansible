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
exports.findLineNumber = exports.parseYaml = exports.parseAnsibleBuiltinFilters = exports.parseAnsibleBuiltin = void 0;
const vscode = __importStar(require("vscode"));
const YAML = __importStar(require("yaml"));
const fs = __importStar(require("fs"));
const variable_tree_1 = require("./variable_tree");
const precedence_1 = require("./precedence");
const ansible_1 = require("./ansible");
function parseAnsibleBuiltin(tree) {
    // Took docs from: https://docs.ansible.com/ansible/latest/reference_appendices/special_variables.html
    // regex replace(control-h and select regex mode): '(\w+)\n\n    (.*)\n' with '$1: '$2',\n'
    // Also update the omit value because it broke the markdown in the hover
    // To create a dict in Typescript format
    const ansibleBuiltin = {
        // Special vars        
        ansible_check_mode: 'Boolean that indicates if we are in check mode or not',
        ansible_collection_name: 'The name of the collection the task that is executing is a part of. In the format of namespace.collection',
        ansible_config_file: 'The full path of used Ansible configuration file',
        ansible_dependent_role_names: 'The names of the roles currently imported into the current play as dependencies of other plays',
        ansible_diff_mode: 'Boolean that indicates if we are in diff mode or not',
        ansible_forks: 'Integer reflecting the number of maximum forks available to this run',
        ansible_index_var: 'The name of the value provided to loop_control.index_var. Added in 2.9',
        ansible_inventory_sources: 'List of sources used as inventory',
        ansible_limit: 'Contents of the --limit CLI option for the current execution of Ansible',
        ansible_loop: 'A dictionary/map containing extended loop information when enabled through loop_control.extended',
        ansible_loop_var: 'The name of the value provided to loop_control.loop_var. Added in 2.8',
        ansible_parent_role_names: 'When the current role is being executed by means of an include_role or import_role action, this variable contains a list of all parent roles, with the most recent role (in other words, the role that included/imported this role) being the first item in the list. When multiple inclusions occur, this list lists the last role (in other words, the role that included this role) as the first item in the list. It is also possible that a specific role exists more than once in this list.',
        ansible_parent_role_paths: 'When the current role is being executed by means of an include_role or import_role action, this variable contains a list of all parent roles paths, with the most recent role (in other words, the role that included/imported this role) being the first item in the list. Please refer to ansible_parent_role_names for the order of items in this list.',
        ansible_play_batch: 'List of active hosts in the current play run limited by the serial, aka ‘batch’. Failed/Unreachable hosts are not considered ‘active’.',
        ansible_play_hosts: 'List of hosts in the current play run, not limited by the serial. Failed/Unreachable hosts are excluded from this list.',
        ansible_play_hosts_all: 'List of all the hosts that were targeted by the play',
        ansible_play_name: 'The name of the currently executed play. Added in 2.8. (name attribute of the play, not file name of the playbook.)',
        ansible_play_role_names: 'The names of the roles currently imported into the current play. This list does not contain the role names that are implicitly included through dependencies.',
        ansible_playbook_python: 'The path to the python interpreter being used by Ansible on the control node',
        ansible_role_name: 'The fully qualified collection role name, in the format of namespace.collection.role_name',
        ansible_role_names: 'The names of the roles currently imported into the current play, or roles referenced as dependencies of the roles imported into the current play.',
        ansible_run_tags: 'Contents of the --tags CLI option, which specifies which tags will be included for the current run. Note that if --tags is not passed, this variable will default to ["all"].',
        ansible_search_path: 'Current search path for action plugins and lookups, in other words, where we search for relative paths when you do template: src=myfile',
        ansible_skip_tags: 'Contents of the --skip-tags CLI option, which specifies which tags will be skipped for the current run.',
        ansible_verbosity: 'Current verbosity setting for Ansible',
        ansible_version: 'Dictionary/map that contains information about the current running version of ansible, it has the following keys: full, major, minor, revision and string.',
        group_names: 'List of groups the current host is part of, it always reflects the inventory_hostname and ignores delegation.',
        groups: 'A dictionary/map with all the groups in inventory and each group has the list of hosts that belong to it',
        hostvars: 'A dictionary/map with all the hosts in inventory and variables assigned to them',
        inventory_dir: 'The directory of the inventory source in which the inventory_hostname was first defined. This always reflects the inventory_hostname and ignores delegation.',
        inventory_hostname: 'The inventory name for the ‘current’ host being iterated over in the play. This is not affected by delegation, it always reflects the original host for the task',
        inventory_hostname_short: 'The short version of inventory_hostname, is the first section after splitting it via .. As an example, for the inventory_hostname of www.example.com, www would be the inventory_hostname_short This is affected by delegation, so it will reflect the ‘short name’ of the delegated host',
        inventory_file: 'The file name of the inventory source in which the inventory_hostname was first defined. Ignores delegation and always reflects the information for the inventory_hostname.',
        omit: 'Special variable that allows you to ‘omit’ an option in a task',
        play_hosts: 'Deprecated, the same as ansible_play_batch',
        playbook_dir: 'The path to the directory of the current playbook being executed. NOTE: This might be different than directory of the playbook passed to the ansible-playbook command line when a playbook contains a import_playbook statement.',
        role_name: 'The name of the role currently being executed.',
        role_names: 'Deprecated, the same as ansible_play_role_names',
        role_path: 'The path to the dir of the currently running role',
        ansible_facts: 'Contains any facts gathered or cached for the inventory_hostname Facts are normally gathered by the setup module automatically in a play, but any module can return facts.',
        ansible_local: 'Contains any ‘local facts’ gathered or cached for the inventory_hostname. The keys available depend on the custom facts created. See the setup module and facts.d or local facts for more details.',
        ansible_become_user: 'The user Ansible ‘becomes’ after using privilege escalation. This must be available to the ‘login user’.',
        ansible_connection: 'The connection plugin actually used for the task on the target host.',
        ansible_host: 'The ip/name of the target host to use instead of inventory_hostname.',
        ansible_python_interpreter: 'The path to the Python executable Ansible should use on the target host.',
        ansible_user: 'The user Ansible ‘logs in’ as.',
    };
    Object.entries(ansibleBuiltin).forEach(([key, value]) => {
        tree.add(key, new variable_tree_1.VariableValue('special_variables', 0, value));
    });
}
exports.parseAnsibleBuiltin = parseAnsibleBuiltin;
function parseAnsibleBuiltinFilters(tree) {
    // and from https://docs.ansible.com/ansible/latest/collections/index_filter.html 
    // regex replace(control-h and select regex mode): '(\s+\w+\.\w+\.(\w+) – (.*)\n\n    (.*)\n)' with '$1: '$2',\n'
    // Also update the omit value because it broke the markdown in the hover
    // To create a dict in Typescript format
    const ansibleBuiltin = {
        b64decode: 'Decode a base64 string',
        basename: 'get a path’s base name',
        checksum: 'checksum of input data',
        combine: 'combine two dictionaries',
        commonpath: 'gets the common path',
        difference: 'the difference of one list from another',
        expanduser: 'Returns a path with ~ translation.',
        extract: 'extract a value based on an index or key',
        flatten: 'flatten lists within a list',
        from_yaml: 'Convert YAML string into variable structure',
        hash: 'hash of input data',
        human_to_bytes: 'Get bytes from string',
        items2dict: 'Consolidate a list of itemized dictionaries into a dictionary',
        mandatory: 'make a variable’s existance mandatory',
        normpath: 'Normalize a pathname',
        path_join: 'Join one or more path components',
        pow: 'power of (math operation)',
        quote: 'shell quoting',
        realpath: 'Turn path into real path',
        regex_findall: 'extract all regex matches from string',
        regex_search: 'extract regex match from string',
        relpath: 'Make a path relative',
        sha1: 'SHA-1 hash of input data',
        split: 'split a string into a list',
        strftime: 'date formating',
        symmetric_difference: 'different items from two lists',
        to_datetime: 'Get datetime from string',
        to_nice_json: 'Convert variable to ‘nicely formatted’ JSON string',
        to_uuid: 'namespaced UUID generator',
        type_debug: 'show input data type',
        unique: 'set of unique items of a list',
        urldecode: 'Decode percent-encoded sequences',
        vault: 'vault your secrets',
        win_dirname: 'Get a Windows path’s directory',
        zip: 'combine list elements',
        comp_type5: 'The comp_type5 filter plugin.',
        parse_cli: 'parse_cli filter plugin.',
        parse_xml: 'The parse_xml filter plugin.',
        type5_pw: 'The type5_pw filter plugin.',
        vlan_parser: 'The vlan_parser filter plugin.',
        cidr_merge: 'This filter can be used to merge subnets or individual addresses.',
        fact_diff: 'Find the difference between currently set facts',
        get_path: 'Retrieve the value in a variable using a path',
        index_of: 'Find the indices of items in a list matching some criteria',
        ipaddr: 'This filter is designed to return the input value if a query is True, else False.',
        ipmath: 'This filter is designed to do simple IP math/arithmetic.',
        ipv4: 'To filter only Ipv4 addresses Ipv4 filter is used.',
        ipwrap: 'This filter is designed to Wrap IPv6 addresses in [ ] brackets.',
        macaddr: 'macaddr / MAC address filters',
        network_in_usable: 'The network_in_usable filter returns whether an address passed as an argument is usable in a network.',
        nthhost: 'This filter returns the nth host within a network described by value.',
        previous_nth_usable: 'This filter returns the previous nth usable ip within a network described by value.',
        remove_keys: 'Remove specific keys from a data recursively.',
        slaac: 'This filter returns the SLAAC address within a network for a given HW/MAC address.',
        to_xml: 'Convert given JSON string to XML',
        validate: 'Validate data with provided criteria',
        gpg_fingerprint: 'Retrieve a GPG fingerprint from a GPG public or private key',
        openssl_privatekey_info: 'Retrieve information from OpenSSL private keys',
        parse_serial: 'Convert a serial number as a colon-separated list of hex numbers to an integer',
        to_serial: 'Convert an integer to a colon-separated list of hex numbers',
        x509_crl_info: 'Retrieve information from X.509 CRLs in PEM format',
        get_public_suffix: 'Returns the public suffix of a DNS name',
        remove_public_suffix: 'Removes the public suffix from a DNS name',
        counter: 'Counts hashable elements in a sequence',
        dict: 'Convert a list of tuples into a dictionary',
        from_csv: 'Converts CSV text input into list of dicts',
        groupby_as_dict: 'Transform a sequence of dictionaries to a dictionary where the dictionaries are indexed by an attribute',
        hashids_encode: 'Encodes YouTube-like hashes from a sequence of integers',
        json_query: 'Select a single element or a data subset from a complex data structure',
        lists_intersect: 'Intersection of lists with a predictive order',
        lists_symmetric_difference: 'Symmetric Difference of lists with a predictive order',
        random_mac: 'Generate a random MAC address',
        to_hours: 'Converte a duration string to hours',
        to_milliseconds: 'Converte a duration string to milliseconds',
        to_months: 'Converte a duration string to months',
        to_time_unit: 'Converte a duration string to the given time unit',
        to_years: 'Converte a duration string to years',
        version_sort: 'Sort a list according to version order instead of pure alphabetical one',
        vault_login_token: 'Extracts the Vault token from a login or token creation',
        join: 'Join a list of arguments to a command',
        quote_argument: 'Quote an argument',
        abspath: 'return absolute path of a file',
        k8s_config_resource_name: 'Generate resource name for the given resource of type ConfigMap, Secret',
        as_datetime: 'Converts an LDAP value to a datetime string',
        as_sid: 'Converts an LDAP value to a Security Identifier string',
        iso8601_duration_from_seconds: 'Encode seconds as a ISO 8601 duration string',
        convert_to_bytes: 'Convert units to bytes',
        get_network_xml_to_dict: 'Get network bridge and uuid to dict',
        ovirtvmip: 'Return first IP',
        ovirtvmipsv4: 'VM IPv4',
        ovirtvmipv4: 'VM IPv4',
        removesensitivevmdata: 'removesensitivevmdata internal filter',
        backends: 'Format websocket connection for backends hosts from inventory.',
        cp_label: 'Convert strings to Candlepin labels',
    };
    Object.entries(ansibleBuiltin).forEach(([key, value]) => {
        tree.add(key, new variable_tree_1.VariableValue('filter', 0, value));
    });
}
exports.parseAnsibleBuiltinFilters = parseAnsibleBuiltinFilters;
async function parseYaml(tree, file) {
    if (!(0, ansible_1.isAnsibleFile)(file)) {
        return;
    }
    //console.log("Parsing " + vscode.workspace.asRelativePath(file));
    try {
        const content = await fs.promises.readFile(file, 'utf8');
        const lineCounter = new YAML.LineCounter();
        // Raises warning on !vault tag and on stringified stuff
        const document = YAML.parseDocument(content, { lineCounter: lineCounter });
        // Were was it found in the file
        // you can use the range [start, value-end, node-end] to get the exact position of the node in the file
        // by prompting lineCounter.linePos(),
        // however not clear to me how to get the range of a specific var
        //const ranges = document.contents?.range;
        const variables = document.toJSON();
        // Remove once we know old and new method yield the same results
        // const old_variables = YAML.parse(content, { lineCounter: lineCounter });
        // assert(old_variables === variables);
        const isInventory = (0, ansible_1.isInventoryFile)(file);
        const nested = findNestedVars(isInventory, variables);
        // Remove any previous entries for this file,
        // in case of updating variables after a saved change in a file
        tree.removeForFile(file);
        // Parse all name:value pairs as possible variable definitions
        Object.values(nested).forEach((variable) => {
            // Todo figure out how to restore this feature while using YAML lib, there is a lineCounter option that should do this
            const lineNumber = findLineNumber(content, variable.name + ":");
            const variableValue = new variable_tree_1.VariableValue(file, lineNumber, variable.value);
            variableValue.parent = variable.type;
            variableValue.precedence = (0, precedence_1.determinePrecedence)(variableValue);
            // console.log(file.split('\\').at(-1) + ": " + variable.name + " of type " + variableValue.parent + " est. precedence " + variableValue.precedence);
            tree.add(variable.name, variableValue);
        });
    }
    catch (error) {
        console.error("Could not parse " + vscode.workspace.asRelativePath(file));
    }
    //console.log("End parsing " + vscode.workspace.asRelativePath(file));
}
exports.parseYaml = parseYaml;
function getType(block) {
    // Given a block like this, we want to know if it is a hosts or block type
    // - name: Converge
    //   hosts: all
    //    vars:
    //     myvar: 2
    if (Object.keys(block).includes("block")) {
        return "block";
    }
    if (Object.keys(block).includes("tasks")) {
        return "tasks";
    }
    if (Object.keys(block).includes("hosts")) {
        return "hosts";
    }
    if (Object.keys(block).includes("set_fact") || Object.keys(block).includes("ansible.builtin.set_fact")) {
        return "set_fact";
    }
    return "";
}
function findNestedVars(isInventory, item, type = "") {
    let result = [];
    if (item === null) {
        return result;
    }
    // If list, parse every item in list
    if (Array.isArray(item)) {
        for (const sub of Object.values(item)) {
            result = result.concat(findNestedVars(isInventory, sub));
        }
    }
    else {
        // Parse all key:value in dictionary
        Object.entries(item).forEach(([key, value]) => {
            try {
                // For vars, set_fact sections, parse all vars and find the type
                if (["vars", "set_fact", "ansible.builtin.set_fact"].includes(key)) {
                    // Keep the type of the parent block, ignore the 'vars', we want to know if it is a block, or task
                    result = result.concat(findNestedVars(isInventory, value, type = getType(item)));
                }
                else 
                // Search deeper
                if (["block", "tasks", "rescue"].includes(key)) {
                    result = result.concat(findNestedVars(isInventory, value));
                }
                else if (["register"].includes(key)) {
                    // We still need to do some stuff at hover, because something like my.stdout does not show correct
                    result.push({ 'name': String(value), 'value': "registered variable", 'type': 'register' });
                }
                else if (["name", "ansible", "when", "debug", "changed_when", "tags", "galaxy_info", "collections"].includes(key) || key.startsWith("ansible.builtin")) {
                    ;
                    ;
                }
                else if (isInventory && value instanceof Object) {
                    // Inventory files have nested list of hosts etc, so each level is parsed as it might contain vars
                    result = result.concat(findNestedVars(isInventory, value));
                }
                else {
                    result.push({ 'name': key, 'value': value, 'type': type });
                }
            }
            catch (exception) {
                console.log(exception);
            }
        });
    }
    return result;
}
/*
 * ChatGPT 3.5
 */
function findLineNumber(fileContent, searchString) {
    const lines = fileContent.split('\n');
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes(searchString)) {
            return (i + 1); // Line numbers start from 1
        }
    }
    return 0;
}
exports.findLineNumber = findLineNumber;
//# sourceMappingURL=parser.js.map