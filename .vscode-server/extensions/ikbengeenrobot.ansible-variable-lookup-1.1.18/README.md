# Ansible variable lookup

## Introduction

This extension will try to find the possible values for Ansible variables,
by parsing the YAML files in your current workspace.

> Some limitations apply, see the [Known Issues] section as the Ansible specification allows for a lot of different approaches to declare variables.

The extension features the following:
1. Implement 'Go to definition' for Ansible variables
2. Implement 'Go to references' for Ansible variables

You can use the builtin way of work of VSCode: right click a variable and use the context menu/ use the shortcuts (F12, shift-F12 by default). Alternatively you can simply hover a variable to show the definition of a variable. If you want to stick to the builtin VSCode way of work you can disable the pop-up feature in the settings of this extension.
 
An example of the optional pop-up:
![example usage](https://gitlab.com/public-repo4311047/ansible-variable-lookup-vscode-extension/-/raw/HEAD/example.png)

The extension will only activate itself if vscode detects a file with the language set to `YAML` (this should be default) or `Ansible` (if the official Ansible extension is installed and configured).
If the extension does not activate; verify if the language of your file is `YAML` or `Ansible` and not `Plain Text` (right bottom corner in vscode).

Once activated it will the pop-up and context menu's will be shown on the configured languages (default Ansible, YAML, jinja2),
but this can be edited in the settings (go to vscode settings (cntrl+,) and search for 'Ansible Variable Lookup').

This extension is work in progress. Updates are automatically installed by VSCode. As Ansible does not enforce naming conventions and rules too strict, finding all variable values is actually quite hard and the code might miss a result.

If you find any issues, please create an issue on the VSCode marketplace site, or on the GitLab project. I am building this extension as a hobby project, so please be friendly ;)

## Features

- Lookup possible values of a ansible variable by browsing the current workspace and parsing the yaml files
- Showing the documentation on Ansible 'special vars'
- Works fine in combination with the official Ansible extension
- No internet connection necessary

## Requirements

- No further requirements

## Extension Settings

Configure the extension using the vscode settings, search for 'Ansible Variable Lookup'.

It allows the following:

- Languages to enable on
- Show pop-up on hover, or only use 'Go to Definition' context menu
- Some formatting option

## Known Issues

- Files with `.yaml` and `.yml` are preferred, however in group_vars and host_vars also files with .json and no extension are parsed (following Ansible specs)
- Nested variables in inventory files are not supported (yet)
- There is limited support for inventory files, only if YAML format, called 'hosts' or 'inventory' and in the vscode project
- Variable sorting based on precedence is complicated to do statically and has limitations, however this is still in development and improving

## Release Notes

See [CHANGELOG.md](https://marketplace.visualstudio.com/items/IkBenGeenRobot.ansible-variable-lookup/changelog) for changes.

## Contributing

Source can be found at [gitlab](https://gitlab.com/public-repo4311047/ansible-variable-lookup-vscode-extension.git)

Please make a merge request for changes.

For bugs or other questions, feedback or appreciation, please use the QA section of the vscode marketplace.

## LICENSE

Some methods were created with help of ChatGPT 3.5 and Github Copilot.
This extension makes use of the YAML library for parsing yml files
See [LICENSE.md](https://marketplace.visualstudio.com/items/IkBenGeenRobot.ansible-variable-lookup/license)