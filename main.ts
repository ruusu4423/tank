radio.onReceivedValue(function (name, value) {
    if (name == "xac") {
        x_ac = value
    } else if (name == "yac") {
        y_ac = value
    } else if (name == "light") {
        pins.digitalWritePin(DigitalPin.P0, value)
        pins.digitalWritePin(DigitalPin.P1, value)
    } else if (name == "degree") {
        motor.servo(motor.Servos.S1, value / 1024 * 180)
    }
    m1value = y_ac / 1024 * -255
    m2value = y_ac / 1024 * -255
    if (x_ac > 0) {
        m2value = m2value * (1 - Math.abs(x_ac) / 1024)
    } else {
        m1value = m1value * (1 - Math.abs(x_ac) / 1024)
    }
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, m1value)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, m2value)
})
let m2value = 0
let m1value = 0
let y_ac = 0
let x_ac = 0
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
radio.setGroup(1)
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . # # # .
    `)
