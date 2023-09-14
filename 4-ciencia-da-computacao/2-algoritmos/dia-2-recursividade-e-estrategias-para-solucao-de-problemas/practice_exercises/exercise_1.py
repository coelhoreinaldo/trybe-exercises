# contar numero par


# def count_even(n):
#     count = 0
#     for number in range(1, n + 1):
#         if number % 2 == 0:
#             count += 1
#     print(count)
#     return count


def count_even(n):
    if n <= 1:
        return 0
    elif n % 2 == 0:
        return 1 + count_even(n - 1)
    else:
        return count_even(n - 1)


if __name__ == "__main__":
    print(count_even(8))
