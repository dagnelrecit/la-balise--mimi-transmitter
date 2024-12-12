let id = 0
radio.setGroup(1)
radio.setTransmitPower(1)
id = id
basic.showNumber(0)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    basic.showString("v")
    radio.sendNumber(4)
    basic.showString("o")
    radio.sendNumber(4)
    basic.showString("u")
    radio.sendNumber(4)
    basic.showString("s")
    radio.sendNumber(4)
})
