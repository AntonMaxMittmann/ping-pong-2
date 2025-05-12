radio.onReceivedNumber(function (receivedNumber) {
    x_position = receivedNumber
    ball = game.createSprite(x_position, 0)
    basic.pause(500)
    for (let index = 0; index < 4; index++) {
        ball.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    if (schlaeger.get(LedSpriteProperty.X) == ball.get(LedSpriteProperty.X)) {
        posTest()
    } else {
        basic.showString("lost!")
        ball.delete()
        schlaeger.delete()
    }
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    schlaeger.change(LedSpriteProperty.X, -1)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    schlaeger.change(LedSpriteProperty.X, 1)
})
function posTest () {
    if (ball.get(LedSpriteProperty.Y) == 4) {
        ball.delete()
        ball = game.createSprite(randint(0, 4), 4)
        for (let index = 0; index < 4; index++) {
            ball.change(LedSpriteProperty.Y, -1)
            basic.pause(500)
        }
        radio.sendNumber(ball.get(LedSpriteProperty.Y))
        ball.delete()
    }
}
let ball: game.LedSprite = null
let x_position = 0
let schlaeger: game.LedSprite = null
schlaeger = game.createSprite(2, 4)
radio.setGroup(1)
