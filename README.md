
# Pyčus

Python and Typescript library for ESP32 running Jaculus, that gets analog joystick input and outputs it as WSAD, Arrows or Mouse input using serial




## Installation

Required Node.js, Jaculus, Python 3.10+ with PySerial and Pynput libs

**Node.js install**

Linux, Mac (using pkg manager, https://nodejs.org/en/download/package-manager#snap)
```bash
  sudo apt install nodejs
  sudo pacman -Sy nodejs
  sudo dnf install nodejs
  sudo brew install nodejs
```
Windows
using installer from https://nodejs.org/en/download

**Jaculus install**

Using terminal or Node.js app
```bash
  npm install -g jaculus-tools
```
Test using (should show help)
```bash
  npx jac
```
Also install Jaculus VSCode Extension

**Python 3.10**

Linux, Mac using terminal
(usually preinstalled)
```bash
  sudo apt install python3
  sudo pacman -Sy python3
  sudo dnf install python3
  sudo brew install python3
```

Windows install from
https://www.python.org/downloads/

**Pip libraries**

Linux, Mac using terminal
Windows using Python Interpreter
```bash
  pip3 install pyserial pynput
```
    
## Usage

* Open project in VSCode with Jaculus and connect ESP32
* In leftdown corner select serial port with your ESP32
* Edit *index.ts* pins according to your pin usage *(Joystick 1 is used for WSAD and Joystick 2 for Arrows or Mouse)*
* Build and flash  **!! don't Monitor, it won't work !!**
* Edit *serialRead.py* for your use by using predefined functions
    * readWSAD() - reads WSAD Input from Joystick1
    * readArrows() - reads Arrows Input from Joystick2
    * readMouse() - reads Mouse Input from Joystick2
* Open new bash terminal or python interpreter and run serialRead.py
```bash
    python3 serialRead.py
```

