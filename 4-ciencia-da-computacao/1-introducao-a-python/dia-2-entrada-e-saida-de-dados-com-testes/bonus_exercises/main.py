import json
import random

with open("pokemons.json", "r") as pokemons_file:
    pokemons = json.load(pokemons_file)["results"]


def get_random_pokemon():
    random_number = random.randint(0, len(pokemons))
    return pokemons[random_number]["name"]


if __name__ == "__main__":
    secret_pokemon = get_random_pokemon()
    showed_letters = -1
    hint = ""

    while hint != secret_pokemon:
        user_answer = input("Quem é esse pokemon? ")
        if user_answer == secret_pokemon:
            print(f"Você ganhou! A resposta era: {secret_pokemon}.")
            break
        else:
            print("Tente novamente!")
            showed_letters += 1
            hint += secret_pokemon[showed_letters]
            print(hint)
        if hint == secret_pokemon:
            print(f"Você Perdeu! A resposta era: {secret_pokemon}.")
