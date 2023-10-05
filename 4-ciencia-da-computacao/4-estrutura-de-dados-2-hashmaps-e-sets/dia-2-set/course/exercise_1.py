class Conjunto:
    def __init__(self) -> None:
        self.set = [False] * 1001
        self.last_element = 0

    def __str__(self) -> str:
        string = "{"

        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "
        string += "}"
        return string

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    def __contains__(self, item):
        return self.set[item]

    def union(self, conjunto_b):
        new_set = Conjunto()

        for index in range(1001):
            if self.set[index] or conjunto_b.set[index]:
                new_set.add(index)

        return new_set

    def intersection(self, conjunto_b):
        new_set = Conjunto()

        for index in range(1001):
            if self.set[index] and conjunto_b.set[index]:
                new_set.add(index)

        return new_set

    def difference(self, conjunto_b):
        new_set = Conjunto()

        for index in range(1001):
            if self.set[index] and not conjunto_b.set[index]:
                new_set.add(index)

        return new_set

    def issubset(self, conjunto_b):
        for index in range(1001):
            if self.set[index] and not conjunto_b.set[index]:
                return False

        return True

    def issuperset(self, conjunto_b):
        for index in range(1001):
            if conjunto_b.set[index] and not self.set[index]:
                return False

        return True


if __name__ == "__main__":
    conj_estudantes = Conjunto()
    conj_lista1 = Conjunto()
    conj_lista2 = Conjunto()

    estudantes = [1, 2, 3, 4, 5, 6, 7]
    lista1_entregues = [1, 4, 7, 3]
    lista2_entregues = [3, 1, 6]

    for elem in estudantes:
        conj_estudantes.add(elem)

    for elem in lista1_entregues:
        conj_lista1.add(elem)

    for elem in lista2_entregues:
        conj_lista2.add(elem)

    print("Não entregaram a lista 1:", conj_estudantes.difference(conj_lista1))
    print("Já entregaram as 2 listas:", conj_lista1.intersection(conj_lista2))
    print(
        "Quem já entregou pelo menos uma lista:",
        conj_lista1.union(conj_lista2),
    )
    print(
        "Quem não entregou nenhuma:",
        conj_estudantes.difference(conj_lista1.union(conj_lista2)),
    )
