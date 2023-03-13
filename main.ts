loops.everyInterval(1000, function() {
    for (let i = 0; i < 5; i++) {
        led.plot(i, i)
    }
    basic.clearScreen()
    
})