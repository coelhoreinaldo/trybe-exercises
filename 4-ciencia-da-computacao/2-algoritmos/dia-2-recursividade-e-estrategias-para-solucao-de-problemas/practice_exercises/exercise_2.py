def greatest_number_aux(list, length):
    if length == 1:
        return list[0]
    else:
        greatest = greatest_number_aux(list, length - 1)
        if greatest > list[length - 1]:
            return greatest
        else:
            return list[length - 1]


def greatest_number(list):
    tamanho = len(list)
    return greatest_number_aux(list, tamanho)


if __name__ == "__main__":
    print(greatest_number([1, 21, 300, 4, 57, 900]))
