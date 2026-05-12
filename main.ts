let pile_ou_face = 0
input.onButtonPressed(Button.A, function () {
    pile_ou_face = randint(1, 2)
    if (pile_ou_face == 1) {
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # . . .
            # # # # .
            . # . # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    let sprite: game.LedSprite = null
    for (let index = 0; index < 10; index++) {
        sprite.change(LedSpriteProperty.Y, 10)
    }
    for (let index = 0; index < 10; index++) {
        sprite.change(LedSpriteProperty.Y, -10)
    }
})
basic.forever(function () {
	
})
