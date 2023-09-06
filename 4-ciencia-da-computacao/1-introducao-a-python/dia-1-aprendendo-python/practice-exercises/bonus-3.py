# def get_total_sum(n):
#     total_sum = 0
#     for number in range((n + 1)):
#         total_sum += number
#     return total_sum


def get_total_sum(n):
    return sum(range(n + 1))


print(get_total_sum(5))
