from http.cookies import Morsel
from tkinter import X


def first_task():
    def alphabet(letter):
        return {
            'a': '.-',
            'b': '-...',
            'c': '-.-.',
            'd': '-..',
            'e': '.',
            'f': '..-.',
            'g': '--.',
            'h': '....',
            'i': '..',
            'j': '.---',
            'k': '-.-',
            'l': '.-..',
            'm': '--',
            'n': '-.',
            'o': '---',
            'p': '.--.',
            'q': '--.-',
            'r': '.-.',
            's': '...',
            't': '-',
            'u': '..-',
            'v': '...-',
            'w': '.--',
            'x': '-..-',
            'y': '-.--',
            'z': '--..',
            ' ': ''
        }.get(letter, '')

    get_letter = "ilikehorses"
    morse_letter = ''

    for letter in get_letter:
        morse_letter = morse_letter + alphabet(letter)
        # print(alphabet(letter))
    morse_letter.replace(' ', '')
    return morse_letter


first = first_task()


print('first: ' + first)
