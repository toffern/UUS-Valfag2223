def lag_skraastrek():
    for i in range(20):
        x = randint(0, 4)
        y = randint(0, 4)
        led.plot(x, y)
        basic.pause(100)
    basic.clear_screen()

for i in range(5):
    lag_skraastrek()
    pausa = randint(4, 20)
    basic.pause(100*pausa)
    frekvens = randint(100,800)
    music.play_tone(frekvens, music.beat(BeatFraction.WHOLE))
