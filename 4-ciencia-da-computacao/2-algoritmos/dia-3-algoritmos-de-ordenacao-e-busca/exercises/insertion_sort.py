def insertion_sort(array):
    for i in range(len(array)):
        current_value = array[i]
        current_position = i
        while (
            current_position > 0
            and array[current_position - 1] > current_value
        ):
            array[current_position] = array[current_position - 1]
            current_position = current_position - 1
        array[current_position] = current_value
    return array


if __name__ == "__main__":
    print(insertion_sort([100, 4, 6, 33, 56, 67]))
