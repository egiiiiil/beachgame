from adafruit_circuitplayground import cp
from tasks.first import *
from tasks.second import *
import time

cp.pixels.brightness = 0.01
first = first_task('a')
while True:

    # Turn on
    if cp.switch:
        # Press A
        if (cp.button_b == False and cp.button_a == True):
            print('A Pressed')
            # Loop through the letters in variable 'first'
            for i in range(len(first)):
                # If a short tone print '.' and flash a short light w/ a tone
                if (first[i] == '.'):
                    print('.')
                    cp.pixels[0:10] = [(255, 0, 255)] * 10  # Purple light
                    cp.play_tone(262, 1)  # Frequency in Hz, for one sec
                    time.sleep(1)
                    cp.pixels[0:10] = [(0, 0, 0)] * 10
                    time.sleep(0.5)
                # If a long tone print '-' and flash a long light w/ a tone
                else:
                    print('-')
                    cp.pixels[0:10] = [(0, 255, 255)] * 10  # Light blue light
                    cp.play_tone(280, 2)  # Frequency in Hz, for two sec
                    time.sleep(2)
                    cp.pixels[0:10] = [(0, 0, 0)] * 10
                    time.sleep(0.5)
            cp.pixels[0:10] = [(0, 0, 0)] * 10
        if (cp.button_b == True):
            print('B Pressed')
            cp.pixels[0:10] = [(0, 255, 255)] * 10
        else:
            cp.pixels[0:10] = [(0, 0, 0)] * 10
