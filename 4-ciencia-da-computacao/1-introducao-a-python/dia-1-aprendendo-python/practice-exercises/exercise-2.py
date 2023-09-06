def getAverage(list):
    sum = 0
    for number in list:
        sum += number
    return sum / len(list)


print(getAverage([1, 2, 3]))
