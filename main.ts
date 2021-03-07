input.onButtonPressed(Button.A, function () {
    Number1 += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Number1)
    basic.showString("+")
    basic.showNumber(Number2)
    basic.clearScreen()
    basic.pause(100)
    Sum += Number1 + Number2
    basic.showNumber(Sum)
})
input.onButtonPressed(Button.B, function () {
    Number2 += 1
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Number1)
    basic.showString("-")
    basic.showNumber(Number2)
    basic.clearScreen()
    basic.pause(100)
    Difference += Number1 - Number2
    basic.showNumber(Difference)
})
let Difference = 0
let Sum = 0
let Number2 = 0
let Number1 = 0
basic.showNumber(0)
