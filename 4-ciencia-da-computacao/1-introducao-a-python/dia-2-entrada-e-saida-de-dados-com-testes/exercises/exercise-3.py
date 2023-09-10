import random


def words():
    words = []
    with open("words.txt") as WORDS:
        for line in WORDS:
            word = line.strip()
            words.append(word)
    return words


WORDS = words()


def draw_secret_word(words):
    secret_word = random.choice(words)
    scrambled_word = "".join(random.sample(secret_word, len(secret_word)))
    return secret_word, scrambled_word


secret_word, scrambled_word = draw_secret_word(WORDS)

print(scrambled_word)


def collect_guesses():
    attempts = 3
    result = "loss"
    while attempts > 0:
        guess = input("qual a palavra? ")
        if guess in WORDS:
            print("você acertou!")
            result = "win"
            break
        else:
            attempts -= 1
            print("tente novamente!")
    return result


def check_result(result):
    if result == "win":
        print(f"You win: {secret_word}")
    else:
        print(f"You lose: {secret_word}")


check_result(collect_guesses())
