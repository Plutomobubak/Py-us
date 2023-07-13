import * as adc from "adc";
import * as gpio from "gpio";
//==========Pins===========
const LED_PIN = 21;
const JOYX_PIN = 6;
const JOYY_PIN = 4;
const JOYB_PIN = 38;
const JOY2X_PIN = 10;
const JOY2Y_PIN = 9;
const JOY2B_PIN = 8;
const BTN0_PIN = 18;
const BTN1_PIN = 16;
const BTN2_PIN = 42;
//==========Config==========
// const ledStrip = new SmartLed(LED_PIN, 8, LED_WS2812);
// gpio.pinMode(BTN0_PIN,gpio.PinMode.INPUT)
// gpio.pinMode(BTN1_PIN,gpio.PinMode.INPUT)
// gpio.pinMode(BTN2_PIN,gpio.PinMode.INPUT)
// gpio.pinMode(JOYB_PIN,gpio.PinMode.INPUT_PULLDOWN)
adc.configure(JOYX_PIN);
adc.configure(JOYY_PIN);
adc.configure(JOY2X_PIN);
adc.configure(JOY2Y_PIN);
gpio.pinMode(JOY2B_PIN, gpio.PinMode.INPUT_PULLDOWN);
setInterval(() => {
    let temp = "";
    if (adc.read(JOYX_PIN) > 700)
        temp += "D";
    if (adc.read(JOYX_PIN) < 300)
        temp += "A";
    if (adc.read(JOYY_PIN) > 700)
        temp += "S";
    if (adc.read(JOYY_PIN) < 300)
        temp += "W";
    if (adc.read(JOY2X_PIN) > 700)
        temp += "<";
    if (adc.read(JOY2X_PIN) < 300)
        temp += ">";
    if (adc.read(JOY2Y_PIN) > 700)
        temp += "i";
    if (adc.read(JOY2Y_PIN) < 300)
        temp += "j";
    if (gpio.read(JOY2B_PIN))
        temp += "m";
    console.log(temp);
}, 50);
// async function main() {
//     radio.begin(12);
//     radio.sendString("s "+ (Math.round(Math.random()*200)-100) + " " + (Math.round(Math.random()*200)-100));
//     await sleep(100)
//     radio.sendString("c #FFBEDA");
//     await sleep(100)
//     radio.sendString("t 10")
//     radio.end()
// }
// setInterval(main,1000);
