from adafruit_circuitplayground import cp
from tasks.first import *
from tasks.second import *
import time

cp.pixels.brightness = 0.01
first = first_task('a')
second = second_task()
repeat = 2

while True:

    # Turn on
    if cp.switch:
        # Press A
        if cp.button_a:
            for _ in range(repeat):
                print('A Pressed')
                # Loop through the letters in variable 'first'
                for i in range(len(first)):
                    # If a short tone print '.' and flash a short light w/ a tone
                    if (first[i] == '.'):
                        print('.')
                        # Purple light
                        cp.pixels[0:10] = [(255, 0, 255)] * 10
                        # Frequency in Hz, for one sec
                        cp.play_tone(262, 1)
                        time.sleep(1)
                        cp.pixels[0:10] = [(0, 0, 0)] * 10
                        time.sleep(0.5)
                    # If a long tone print '-' and flash a long light w/ a tone
                    else:
                        print('-')
                        # Light blue light
                        cp.pixels[0:10] = [(0, 255, 255)] * 10
                        # Frequency in Hz, for two sec
                        cp.play_tone(280, 2)
                        time.sleep(2)
                        cp.pixels[0:10] = [(0, 0, 0)] * 10
                        time.sleep(0.5)
            cp.pixels[0:10] = [(0, 0, 0)] * 10
        # Press A
        if cp.button_b:
            print('B Pressed')
            print(second)
            cp.pixels[0:10] = [(0, 255, 255)] * 10
            second

        else:
            cp.pixels[0:10] = [(0, 0, 0)] * 10
