# contar numero par


def count_even(n):
    count = 0
    for number in range(1, n + 1):
        if number % 2 == 0:
            count += 1
    print(count)
    return count


if __name__ == "__main__":
    count_even(6)
