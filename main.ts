/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Bain Liao
 * Created on: Sep 2024
 * This program simulates a traffic light
*/

// variables
let neopixelStrip: neopixel.Strip = null

// cleanup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()

input.onButtonPressed(Button.A, function () {
    //Green
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.show()
    pause(2000)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    //Yellow
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    pause(2000)
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    //Red
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.show()
    pause(2000)
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
})