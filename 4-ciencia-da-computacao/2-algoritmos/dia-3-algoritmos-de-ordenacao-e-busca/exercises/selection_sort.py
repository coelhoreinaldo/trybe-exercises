def selection_sort(array):
    for i in range(len(array)):
        minimum = i

        for j in range(i + 1, len(array)):
            if array[j] < array[minimum]:
                minimum = j

        array[minimum], array[i] = array[i], array[minimum]

    return array


if __name__ == "__main__":
    print(selection_sort([100, 4, 6, 33, 56, 67]))
