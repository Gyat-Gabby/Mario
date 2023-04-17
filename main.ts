music.playTone(659, music.beat(BeatFraction.Half))
music.stopAllSounds()
music.playTone(659, music.beat(BeatFraction.Half))
music.stopAllSounds()
music.playTone(659, music.beat(BeatFraction.Half))
music.stopAllSounds()
music.playTone(523, music.beat(BeatFraction.Quarter))
music.playTone(659, music.beat(BeatFraction.Quarter))
music.stopAllSounds()
music.playTone(784, music.beat(BeatFraction.Half))
music.playTone(392, music.beat(BeatFraction.Half))
music.playTone(523, music.beat(BeatFraction.Half))
music.playTone(392, music.beat(BeatFraction.Half))
music.playTone(330, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(494, music.beat(BeatFraction.Half))
music.playTone(466, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(392, music.beat(BeatFraction.Half))
music.playTone(659, music.beat(BeatFraction.Half))
music.playTone(784, music.beat(BeatFraction.Half))
music.playTone(880, music.beat(BeatFraction.Half))
music.playTone(698, music.beat(BeatFraction.Half))
music.playTone(784, music.beat(BeatFraction.Half))
music.playTone(659, music.beat(BeatFraction.Half))
music.playTone(523, music.beat(BeatFraction.Quarter))
music.playTone(587, music.beat(BeatFraction.Quarter))
music.playTone(494, music.beat(BeatFraction.Quarter))
basic.forever(function () {
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        # # # # .
        # . . . #
        # # # # #
        # . . # .
        # . . . #
        `)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        `)
    basic.showLeds(`
        . # # # .
        # # . # #
        # # . # #
        # # . # #
        . # # # .
        `)
    basic.pause(100)
})
basic.forever(function () {
	
})
