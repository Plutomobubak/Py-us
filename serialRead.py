import serial
from pynput.keyboard import Key, Listener, Controller as keyboard_controller
from pynput.mouse import Button, Controller

#initalization
keyboard = keyboard_controller()
mouse = Controller()
x = 0
y= 0
#edit port to /dev/ttyACM(n) for linux
#or COM(n) for Windows
#(I have no idea how does it work on mac)
ser = serial.Serial('COM4', 19200, timeout=1)
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
    line = str(ser.readline())
    #this shit is for Windows (i hate you Microsoft <3 )
    #to explain: Windows reads some useless boot messages so i need to filter them
    if "boot" not in line:
        #(un)comment for your usage
        #readWSAD(line)
        #readArrows(line)
        readMouse(line)