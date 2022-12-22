let score = 0
let flippingdarn = 0
let list2: number[] = []
let heads = 0
let tails = 0
for (let index = 0; index < 10; index++) {
    basic.showString("1 is heads 0 is tails", 90)
list2 = [
    randint(1, 1),
    randint(0, 1),
    randint(0, 1),
    randint(0, 1),
    randint(0, 1),
    randint(0, 1),
    randint(0, 1),
    randint(0, 1),
    randint(0, 1),
    randint(0, 1),
    randint(0, 0)
    ]
    if (list2[0] + (list2[1] + (list2[2] + (list2[3] + (list2[4] + (list2[5] + (list2[6] + (list2[7] + (list2[8] + list2[9])))))))) > 6 || list2[0] + (list2[1] + (list2[2] + (list2[3] + (list2[4] + (list2[5] + (list2[6] + (list2[7] + (list2[8] + list2[9])))))))) < 4) {
        flippingdarn = 0
    } else {
        flippingdarn = 1
    }
    basic.showString("" + list2[0])
    basic.showString(" ")
    basic.showString("" + list2[1])
    basic.showString(" ")
    basic.showString("" + list2[2])
    basic.showString(" ")
    basic.showString("" + list2[3])
    basic.showString(" ")
    basic.showString("" + list2[4])
    basic.showString(" ")
    basic.showString("" + list2[5])
    basic.showString(" ")
    basic.showString("" + list2[6])
    basic.showString(" ")
    basic.showString("" + list2[7])
    basic.showString(" ")
    basic.showString("" + list2[8])
    basic.showString(" ")
    basic.showString("" + list2[9])
    basic.showString("hold a for cheater or b for fair", 90)
basic.pause(2000)
    if (input.buttonIsPressed(Button.A)) {
        if (flippingdarn == 0) {
            for (let index = 0; index < 4; index++) {
                music.playMelody("C D F G B C5 - - ", 1400)
            }
            basic.showString("CORRECT!!")
            score += 1
        } else if (flippingdarn == 1) {
            for (let index = 0; index < 4; index++) {
                music.playMelody("C5 B G F D C - - ", 1400)
            }
            basic.showString("INCORRECT!!")
            score += -1
        } else {
        	
        }
    } else if (input.buttonIsPressed(Button.B)) {
        if (flippingdarn == 1) {
            for (let index = 0; index < 4; index++) {
                music.playMelody("C D F G B C5 - - ", 1400)
            }
            basic.showString("CORRECT!!")
            score += 1
        } else if (flippingdarn == 0) {
            for (let index = 0; index < 4; index++) {
                music.playMelody("C5 B G F D C - - ", 1400)
            }
            basic.showString("INCORRECT!!")
            score += -1
            basic.showString("score")
            basic.showString("" + (score))
        } else {
        	
        }
    } else {
    	
    }
}
basic.showString("score!")
basic.showString("" + (score))
basic.forever(function () {
	
})
