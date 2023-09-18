from Cronometro import Cronometro
from bubble_sort import bubble_sort

animals = ["zebra", "macaco", "elefante", "arara", "javali"]


if __name__ == "__main__":
    with Cronometro("bubble_sort"):
        print(bubble_sort(animals))


# Exercício 1 Dado um array com os seguintes elementos ["zebra", "macaco",
# "elefante", "arara", "javali"], após duas iterações utilizando bubble sort,
# como estaria este array?

# ['elefante', 'arara', 'javali', 'macaco', 'zebra']
