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

    get_letter = "i like horses"
    no_space = get_letter.replace(' ', '')
    morse_letter = ''

    for letter in get_letter:
        morse_letter = morse_letter + alphabet(letter)
    morse_letter.replace(' ', '')
    return morse_letter
