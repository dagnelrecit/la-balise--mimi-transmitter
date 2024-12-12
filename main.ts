let id = 0
radio.setGroup(1)
radio.setTransmitPower(1)
id = id
basic.showNumber(0)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    radio.sendNumber(1)
    basic.pause(200)
})
