def good_pairs(numbers):
    answer = 0
    i = 0
    size = len(numbers)
    for i in range(size):
        print("i", i)
        for j in range(i + 1, size):
            if numbers[i] == numbers[j]:
                answer += 1
    return answer


produtos = [1, 3, 1, 1, 2, 3]

good_pairs(produtos)
