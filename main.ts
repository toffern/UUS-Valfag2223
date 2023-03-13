let pausa: number;
let frekvens: number;
function lag_skraastrek() {
    let x: number;
    let y: number;
    for (let i = 0; i < 20; i++) {
        x = randint(0, 4)
        y = randint(0, 4)
        led.plot(x, y)
        basic.pause(100)
    }
    basic.clearScreen()
}

for (let i = 0; i < 5; i++) {
    lag_skraastrek()
    pausa = randint(4, 20)
    basic.pause(100 * pausa)
    frekvens = randint(100, 800)
    music.playTone(frekvens, music.beat(BeatFraction.Whole))
}
