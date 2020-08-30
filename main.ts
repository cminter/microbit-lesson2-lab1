let current = 0
let x = 0
let y = 0
function randomDots2 (total: number) {
    current = 0
    while (current < total) {
        x = randint(0, 4)
        y = randint(0, 4)
        if (!(led.point(x, y))) {
            led.plot(x, y)
            current += 1
        }
    }
}
function dot () {
    led.plot(1, 3)
    led.plotBrightness(2, 2, 64)
}
function randomDot () {
    led.plot(randint(0, 4), randint(0, 4))
}
function randomDots (count: number) {
    for (let index = 0; index < count; index++) {
        led.plot(randint(0, 4), randint(0, 4))
    }
}
