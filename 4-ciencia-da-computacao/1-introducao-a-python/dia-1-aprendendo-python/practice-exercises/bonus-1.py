# def get_min_number(numbers):
#     min_number = numbers[0]
#     for number in numbers:
#         if number < min_number:
#             min_number = number
#     return min_number


def get_min_number(numbers):
    return min(numbers)


numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

print(get_min_number(numbers))
