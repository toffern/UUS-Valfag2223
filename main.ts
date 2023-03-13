loops.everyInterval(1000, function on_every_interval() {
    for (let i = 0; i < 5; i++) {
        led.plot(i, i)
        basic.pause(100)
    }
    basic.clearScreen()
})
