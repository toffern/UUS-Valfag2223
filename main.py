def on_every_interval():
    for i in range(5):
        led.plot(i, i)
        basic.pause(100)
    basic.clear_screen()

loops.every_interval(1000, on_every_interval)
