---
title: Git
subtitle: Install Git 
excerpt: Git Settings
show_toc: true
---

## Reference
[https://singleboardbytes.com/649/use-github-raspberry-pi.htm](
https://singleboardbytes.com/649/use-github-raspberry-pi.htm)

## Setup the RPi Software (Dronekit)
### Install
Launch the Terminal and execute the command below to update the system.
```
sudo apt update
sudo apt upgrade
```

Execute the command below to install Git.
```
sudo apt install git
```

From the image above, Git is already installed in the system. You can check the version using the command below:
```
git --version
```

### Configure Git
Now that we have Git installed, we need to link it to our Github account. You will be required to enter your Github username and email. Use the commands below:
```
git config --global user.name "Github_username"
git config --global user.email "Github_Email"
```

Remember to replace the username and email above accordingly. To check whether you have entered the correct details, use the command below:
```
git config --list
```

### Cheatsheet
Following is a cheatsheet for common use command
```
git status

git add <file name>
git add *

git rm --cached
git rm --cached index.css

git commit -m "message"
git commit -a

git push
```

## Checkpoint
- [Image]()