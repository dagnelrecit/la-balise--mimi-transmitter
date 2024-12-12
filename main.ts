let id = 0
radio.setGroup(1)
radio.setTransmitPower(1)
id = id
basic.showNumber(0)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    basic.showString("b")
    radio.sendNumber(5)
    basic.showString("i")
    radio.sendNumber(5)
    basic.showString("e")
    radio.sendNumber(5)
    basic.showString("n")
    radio.sendNumber(5)
    basic.showString("!")
    radio.sendNumber(5)
})
