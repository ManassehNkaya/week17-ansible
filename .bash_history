cd ~
mkdir ansible-dev
cd ansible-dev
code .
ls
vi inventory.yml
touch ansible.cfg
vi ansible.cfg
ansible-inventory --graph
ansible all -m ping 
s
ls
vi inventory.yml 
ansible all -m ping 
vi inventory.yml 
ansible all -m ping 
ansible webservers -a "uptime"
ansible [hostgroup] module/options[arguments]
ansible ws -a "uptime"
clear
ansible all -m greoup -a 'name=cloud state=present'
ansible all -m group -a 'name=cloud state=present'
ansible all -m group -a 'name=cloud state=present' -b
ls
cd ansible-dev
ansible all -m file -a 'path=/tmp/ansible.text state=directory
ls
cd ansible-dev/
ansible all -m file -a 'path=/tmp/ansible.text state=directory










ls
ansible all -m file -a 'path=/tmp/ansible.text state=directory

vi inv
vi inv.yml 
logout
exit
ls
cd ansible-dev
code .
ls
vi inv.yml 
ls
