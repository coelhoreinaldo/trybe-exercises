from Cronometro import Cronometro


def binary_search(array, low_index, high_index, value):
    if high_index < low_index:
        raise ValueError(f"{value} is not in list")
    middle_index = (high_index + low_index) // 2

    if array[middle_index] == value:
        return middle_index

    elif array[middle_index] > value:
        return binary_search(array, low_index, middle_index - 1, value)
    else:
        return binary_search(array, middle_index + 1, high_index, value)


def binary_search_iterative(array, low_index, high_index, target_value):
    if high_index < low_index:
        raise ValueError(f"{target_value} is not in list")

    found_element = None

    while low_index <= high_index:
        middle_index = (low_index + high_index) // 2

        if array[middle_index] == target_value:
            found_element = middle_index
            break
        elif array[middle_index] > target_value:
            high_index = middle_index - 1
        else:
            low_index = middle_index + 1

    return found_element


if __name__ == "__main__":
    array = [2, 3, 4, 10, 40]
    target = 10

    with Cronometro("recursive"):
        result = binary_search(array, 0, len(array) - 1, target)
        print(f"Elemento encontrado na posição: {result}")
    with Cronometro("iterative"):
        result2 = binary_search_iterative(array, 0, len(array) - 1, target)
        print(f"Elemento encontrado na posição: {result2}")
