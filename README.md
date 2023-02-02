# cli-application-node.js
This repository contains a command line banking application developed using Node.js. The data is stored using file-handling into a .json file and no DB is used.
The application handles four basic commands used in banking which are CREATE, DEPOSITE, WITHDRAW and BALANCE.

**Before Installation make sure you have Node.js and npm configured on your device also VScode could be used as a code editor.**
## Installation:
Open cmd/terminal and move to the specific folder where you want to clone the repo. After that clone the repository using the below code snippet.
```
git clone https://github.com/the-third-robot/cli-application-node.js.git
```
Open the folder(cli-application-node.js) using VScode as it is easy to use and handle, or move to the folder in cmd/terminal using **cd cli-application-node.js**

Install all dependencies with,
```
npm i
```
Install the cli globally on the device,
```
npm i -g
```
#How to use:
Once the global installation is complete the cli-app will be accessible from any cmd/terminal and from any directory.
Just open the cmd/terminal and start adding the commands to get the output. 

## All Commands:

**As this is a command line tool, so to access it, you will need write the command with "Kelp-bank" in the beginning as shown below, **
```
kelp-bank COMMAND acc_no data
```
1. CREATE command:
```
kelp-bank CREATE ACC001 FVTPL
```
**If the name(FVTPL) has spaces in it, either put quotations around it or escape the spaces. If it doesn't, quotations are not necessary.**
2. DEPOSIT command:
```
kelp-bank DEPOSIT ACC001 1000
```
3. WITHDRAW command:
```
kelp-bank WITHDRAW ACC001 200
```
4. BALANCE command:
```
kelp-bank BALANCE AC001
```

**Output could be seen on BALANCE command only.**
**There's a bankdb.json gets created on CREATE command, the data change can be seen in that file after each command.**

#UnauthorizedAccess on VScode while executing commands:
There might be a case of getting  UnauthorizedAccess in the VScode terminal, use the code snippet below to resolve the issue and try again.
```
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted 
```
The reference for this error can be found on the link: 
https://stackoverflow.com/questions/67150436/cannot-be-loaded-because-running-scripts-is-disabled-on-this-system-for-more-in

### If everything goes well, the kind of output expected given below.
![Screenshot (2)](https://user-images.githubusercontent.com/51785772/216401725-e643cfae-19c2-4781-a580-f59a2eb749dd.png)

