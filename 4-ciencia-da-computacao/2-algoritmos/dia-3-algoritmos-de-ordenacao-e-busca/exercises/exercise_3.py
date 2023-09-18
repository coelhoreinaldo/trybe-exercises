from random import shuffle
from Cronometro import Cronometro
from selection_sort import selection_sort
from insertion_sort import insertion_sort

ordenados = list(range(10000))
inversamente_ordenados = list(reversed(range(10000)))
aleatorios = ordenados[:]  # copia dos ordenados
shuffle(aleatorios)  # embaralha eles


if __name__ == "__main__":
    with Cronometro("selection sort"):
        selection_sort(aleatorios)
    with Cronometro("insertion sort"):
        insertion_sort(aleatorios)
