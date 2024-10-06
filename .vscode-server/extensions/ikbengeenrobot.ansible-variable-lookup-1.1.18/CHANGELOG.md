# Change Log

## [1.1.18]

- Delete entries from popup if a file is deleted (they used to stay in cache even if source was no longer there)

## [1.1.16]

- Release of find references feature

## [1.1.15]

- Fix for reference search where dictkey and variable are the same word
  For example:
  ```
  interface:
    name: {{ name }}
  ```

## [1.1.13]

- Fix broken glob pattern for references search

## [1.1.11]

- Limit reference search to templates folder and .yml files

## [1.1.9]

- Simplified get references search, might give more results that are not really a variable, but less likely to miss real occurances
- Fix for ignoring variables starting with an underscore

## [1.1.7]

- Working on get references

## [1.1.5]

- All file reads are now parallel async (instead of doing one by one async)

## [1.1.3]
- Replace vscode open method with simple file read for references feature, because it would crash vscode (vscode open will trigger other extensions to parse the file)

## [1.1.1]
- Added go to reference method, initial version that needs further testing

## [1.1.0]

- Added goto definition implementation following official vscode hook
  the extension 'Ansible Go to definition' from 'Blauwe Lucht' is dedicated to this feature and probably and might be an interesting alternative if you do not require the hover feature of this extension.
- Added first configuration option, hover popup can be enable or disabled.
- Working on 'Go To References'.
- Added setting to set truncate length for displaying of the value.
- Added setting for languages to activate extension on
- Bugfix for dictionary hover, whole tree was shown instead of sub item

## [1.0.1]

- Refactoring code after a few version of features and patches 

## [1.0.0]

- Updated parse file filter to include files called 'hosts' or 'inventory'

## [0.9.5]

- Rebuilt only

## [0.9.4]

- Parsing YAML inventory files if they are called 'hosts' or 'inventory'

## [0.9.3]

- Improvement in detecting what files to parse, skipping hidden files now

## [0.9.2]

- Exclude invalid variable names before hovering on a word

## [0.9.1]

- Support precedence level 16
- Some minor parsing improvements, also work if variable in use is enclosed with qoutes

## [0.9.0]

- Also show hover info on some template filters
- Better detection on what files to scan, also scan yaml files in group_vars if there is no extension or the json extension

## [0.8.0]

- Improved precedence estimation a bit more.

## [0.7.3]

- Improved hover text, showing current entry as 'here' instead of full path link

## [0.7.2]

- Improve precedence sorting (implemented level 19)

## [0.7.1]

- Fix in getting folder name out of path, this improves precendence calculation

## [0.7.0]

- Also scan for .yaml (beside .yml)
- Also scan for group_vars and host_vars files without extension, as Ansible specs also support this

## [0.6.0]

- Also support [] notation, like `my_interfaces['eth0']['ip']`

## [0.5.2]

- Fix formatting for truncated values, markdown in second part was not correct
- If hovering the only declaration of a variable, no longer show a hover (as this would only show itself)
- For simple cases show that a variable is a registerd variable, does show line number yet and does not work if registered var contains a '.'

## [0.5.1]

- Bugfix in formatting, some variables were not shown due to this in 0.5.0

## [0.5.0]

- Able to parse vars sections nested blocks
- Handle vault encrypted by not showing content but only that it is vault encrypted

## [0.4.1]

- Bugfix parsing vars sections, assumed vars contained a list, but it is a dict

## [0.4.0]

- Support for 'set_facts:' sections, but not yet if these are nested in 'block' sections

## [0.3.3]

- Support for 'vars:' sections, took a bit more work as we have to do a bit more searching to find them.


## [0.3.2]

- Fixed a bug, numbers were shown as an empty string due to a bug in the formatting function
- Support for language Jinja (in case the Jinja extension is installed), a YAML or Ansible file still needs to be opened first to load the extension

## [0.3.1]

- Also activate extension on language 'Ansible' (new language option if the official Ansible extension is installed)

## [0.3.0]

- Added support for Ansible 'special variables' to the hover

## [0.2.4]

- Added example to README

## [0.2.3]

- Improved sorting a bit, but still not following official precendence

## [0.2.2]

- Add line number in navigation

## [0.2.1]

- Improved formatting of the results
- Refactored code a bit

## [0.2.0]

- Reimplemented using the YAML library to parse variables
- Smarter loading, parse all vars on start and update only files saved (so editing outside vscode will not refresh the values, but this is acceptable)
- No longer able to navigate to specific line number, have to reimplement this because of the changed backend
- Dict items are not fully handled, but this should be easy now
- List items are now parsed and shown as well

## [0.1.0]

- Initial release
- Some (a lot) of limitations apply, for example only simple variables can be lookup up, dicts will not work.
- Consider the extension 'Template Finder' which has a superior lookup implemented.
- Some precedence sorting of the results is based on heuristics and naming conventions, so no guarantees.
- The plugin is really basic and might not find all values