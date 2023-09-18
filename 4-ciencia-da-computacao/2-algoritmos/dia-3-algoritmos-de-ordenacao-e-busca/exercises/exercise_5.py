from Cronometro import Cronometro


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

    with Cronometro("iterative"):
        result2 = binary_search_iterative(array, 0, len(array) - 1, target)
        print(f"Elemento encontrado na posição: {result2}")
