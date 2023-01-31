function update_score_board () {
    OLED.clear()
    OLED.writeStringNewLine("p1 score;" + p1)
    OLED.newLine()
    OLED.writeStringNewLine("p2 score;" + p2)
    OLED.newLine()
    OLED.writeStringNewLine("ties score;" + ties)
    OLED.newLine()
    OLED.writeStringNewLine("rounds score;" + rounds)
}
input.onButtonPressed(Button.A, function () {
    p1 += 1
    rounds += 1
    update_score_board()
})
input.onButtonPressed(Button.AB, function () {
    ties += 1
    rounds += 1
    update_score_board()
})
input.onButtonPressed(Button.B, function () {
    p2 += 1
    rounds += 1
    update_score_board()
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    p1 = 0
    p2 = 0
    rounds = 0
    ties = 0
    OLED.writeStringNewLine("shall we play a game?")
    basic.pause(2000)
    update_score_board()
}
let rounds = 0
let ties = 0
let p2 = 0
let p1 = 0
reset()
