def sum(n):
    if n == 0:
        return 0
    else:
        print(n)
        return n + sum(n - 1)


print(sum(4))
