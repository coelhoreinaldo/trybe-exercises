import random


def load_words():
    with open("words.txt") as words_file:
        words = [line.strip() for line in words_file]
    return words


def draw_secret_word(words):
    secret_word = random.choice(words)
    scrambled_word = "".join(random.sample(secret_word, len(secret_word)))
    return secret_word, scrambled_word


def collect_guesses(words):
    attempts = 3
    result = "loss"
    while attempts > 0:
        guess = input("qual a palavra? ")
        if guess in words:
            print("você acertou!")
            result = "win"
            break
        else:
            attempts -= 1
            print(
                f"tente novamente! você tem {attempts} tentativas restantes."
            )
    return result


def check_result(result, secret_word):
    if result == "win":
        print(f"You win: {secret_word}")
    else:
        print(f"You lose: {secret_word}")


def main():
    WORDS = load_words()
    secret_word, scrambled_word = draw_secret_word(WORDS)
    print(scrambled_word)
    result = collect_guesses(WORDS)
    check_result(result, secret_word)


if __name__ == "__main__":
    main()
