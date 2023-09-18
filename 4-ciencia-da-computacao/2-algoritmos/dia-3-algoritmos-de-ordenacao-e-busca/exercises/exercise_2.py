from merge_sort import merge_sort
from Cronometro import Cronometro

# Exercício 2 Demonstre o passo a passo do processo de mistura de um array,
#  sendo ordenado utilizando merge sort. Comece o passo a passo a partir da
# linha abaixo:
# 7 3    5 4    6 8    2 1

if __name__ == "__main__":
    with Cronometro("merge sort"):
        print(merge_sort([7, 3, 5, 4, 6, 8, 2, 1]))
