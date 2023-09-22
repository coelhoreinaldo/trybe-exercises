entradas = [1, 2, 3, 1]
saidas = [4, 2, 7, 8]

instante_buscado = 4


def people_in_lib(entrances, exits, time_instant):
    people_found = 0
    for index in range(len(entrances)):
        if entrances[index] <= time_instant <= exits[index]:
            people_found += 1
    return people_found


print(people_in_lib(entradas, saidas, instante_buscado))
