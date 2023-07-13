import * as adc from "adc";
import * as gpio from "gpio";
//==========Pins===========
// change pin numbers here
// X, Y axis and B button
// 1 is used for WSAD Input
// 2 is used for Arrows and??/or Mouse Input
// Joystick 1
const JOYX_PIN = 6
const JOYY_PIN = 4
const JOYB_PIN = 38
// Joystick 2
const JOY2X_PIN = 10
const JOY2Y_PIN = 9
const JOY2B_PIN = 8
//==========Config==========
adc.configure(JOYX_PIN);
adc.configure(JOYY_PIN);
adc.configure(JOY2X_PIN);
adc.configure(JOY2Y_PIN);
gpio.pinMode(JOY2B_PIN,gpio.PinMode.INPUT_PULLDOWN)
// gpio.pinMode(JOYB_PIN,gpio.PinMode.INPUT_PULLDOWN)

//==========Code==========
// You can change analog comparison values to adjust
// reads values from 0 to 1023
let upper = 700
let lower = 300
setInterval(()=>{
    let temp = ""
    if(adc.read(JOYX_PIN)>upper)temp += "D"
    if(adc.read(JOYX_PIN)<lower)temp += "A"
    if(adc.read(JOYY_PIN)>upper)temp += "S"
    if(adc.read(JOYY_PIN)<lower)temp += "W"
    if(adc.read(JOY2X_PIN)>upper)temp += "<"
    if(adc.read(JOY2X_PIN)<lower)temp += ">"
    if(adc.read(JOY2Y_PIN)>upper)temp += "i"
    if(adc.read(JOY2Y_PIN)<lower)temp += "j"
    if(gpio.read(JOY2B_PIN))temp += "m"
    console.log(temp)
},50)