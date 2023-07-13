import serial
from pynput.keyboard import Key, Listener, Controller as keyboard_controller
from pynput.mouse import Button, Controller

#initalization
keyboard = keyboard_controller()
mouse = Controller()
x = 0
y= 0
#functions
def readArrows(line):
    if "i" in line:
        keyboard.press(Key.up)
    else:
        keyboard.release(Key.up)
    if "j" in line:
        keyboard.press(Key.down)
    else:
        keyboard.release(Key.down)
    if "<" in line:
        keyboard.press(Key.left)
    else:
        keyboard.release(Key.left)
    if ">" in line:
        keyboard.press(Key.right)
    else:
        keyboard.release(Key.right)

def readMouse(line):
    if "i" in line:
        mouse.move(0,-25)
    if "j" in line:
        mouse.move(0,25)
    if "<" in line:
        mouse.move(-25,0)
    if ">" in line:
        mouse.move(25,0)
    if "m" in line:
        mouse.press(Button.left)
    else:
        mouse.release(Button.left)

def readWSAD(line):
        if "W" in line:
            keyboard.press("w")
        else:
            keyboard.release("w")
        if "S" in line:
            keyboard.press("s")
        else:
            keyboard.release("s")
        if "A" in line:
            keyboard.press("a")
        else:
            keyboard.release("a")
        if "D" in line:
            keyboard.press("d")
        else:
            keyboard.release("d")
#main loop
while(True):
    with serial.Serial('/dev/ttyACM3', 19200, timeout=1) as ser:
        line = str(ser.readline())
        #(un)comment for your usage
        readWSAD(line)
        readArrows(line)
        #readMouse(line)
