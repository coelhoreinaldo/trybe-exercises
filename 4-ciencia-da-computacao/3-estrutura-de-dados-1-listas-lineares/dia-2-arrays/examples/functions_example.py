array = [1, 2, 4, 5, 6]
other_array = [7, 8, 9]


new_array = array + other_array
print("Array unido:", new_array)
print("-----")


print("Possui 5:", 5 in new_array)
print("Possui 10:", 10 in new_array)
print("-----")

print("Vezes em que o 1 se repete:", [1, 2, 1, 2, 1, 4, 5, 6].count(1))
print("-----")

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print("indice[1][1]:", matrix[1][1])
print("-----")

del matrix[2][2]
print("deletando índice [2][2]:", matrix)
