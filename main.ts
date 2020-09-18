basic.showLeds(`
    # . # . #
    # . # . #
    . # . # .
    # . # . #
    # . # . #
    `)
basic.forever(function () {
    Firefly.setServo(Firefly.ServoPinValues.servo1, 0)
    basic.pause(2000)
    Firefly.setServo(Firefly.ServoPinValues.servo1, 180)
    basic.pause(2000)
    Firefly.setDC(Firefly.DCPinValues.dcmotor4, DCDirectionValuesDansk.forward, 25)
    basic.pause(1000)
    Firefly.setDC(Firefly.DCPinValues.dcmotor4, DCDirectionValuesDansk.forward, 0)
    basic.pause(1000)
})
