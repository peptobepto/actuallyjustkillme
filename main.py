score = 0
flippingdarn = 0
list2: List[number] = []
tails = 0
heads = 0
for index in range(10):
    basic.show_string("1 is heads 0 is tails", 90)
    list2 = [randint(1, 1),
        randint(0, 1),
        randint(0, 1),
        randint(0, 1),
        randint(0, 1),
        randint(0, 1),
        randint(0, 1),
        randint(0, 1),
        randint(0, 1),
        randint(0, 1),
        randint(0, 0)]
    if list2[0] + (list2[1] + (list2[2] + (list2[3] + (list2[4] + (list2[5] + (list2[6] + (list2[7] + (list2[8] + list2[9])))))))) > 6 or list2[0] + (list2[1] + (list2[2] + (list2[3] + (list2[4] + (list2[5] + (list2[6] + (list2[7] + (list2[8] + list2[9])))))))) < 4:
        flippingdarn = 0
    else:
        flippingdarn = 1
    basic.show_string("" + str(list2[0]))
    basic.show_string(" ")
    basic.show_string("" + str(list2[1]))
    basic.show_string(" ")
    basic.show_string("" + str(list2[2]))
    basic.show_string(" ")
    basic.show_string("" + str(list2[3]))
    basic.show_string(" ")
    basic.show_string("" + str(list2[4]))
    basic.show_string(" ")
    basic.show_string("" + str(list2[5]))
    basic.show_string(" ")
    basic.show_string("" + str(list2[6]))
    basic.show_string(" ")
    basic.show_string("" + str(list2[7]))
    basic.show_string(" ")
    basic.show_string("" + str(list2[8]))
    basic.show_string(" ")
    basic.show_string("" + str(list2[9]))
    basic.show_string("hold a for cheater or b for fair", 90)
    basic.pause(2000)
    if input.button_is_pressed(Button.A):
        if flippingdarn == 0:
            basic.show_string("CORRECT!!")
            score += 1
        elif flippingdarn == 1:
            basic.show_string("INCORRECT!!")
            score += -1
        else:
            pass
    elif input.button_is_pressed(Button.B):
        if flippingdarn == 1:
            basic.show_string("CORRECT!!")
            score += 1
        elif flippingdarn == 0:
            basic.show_string("INCORRECT!!")
            score += -1
        else:
            pass
    else:
        pass
basic.show_string("score!")
basic.show_string("" + str(score))

def on_forever():
    pass
basic.forever(on_forever)
