def iterative_factorial(n):
    fact = 1

    for i in range(1, n + 1):
        fact = fact * i

    return fact


print(iterative_factorial(5))
