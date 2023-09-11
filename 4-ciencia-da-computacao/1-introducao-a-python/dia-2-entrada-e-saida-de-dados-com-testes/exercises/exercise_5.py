def fizzbuzz(num):
    result = []
    for num in range(1, num + 1):
        if num % 3 == 0 and num % 5 == 0:
            result.append("FizzBuzz")
        elif num % 5 == 0:
            result.append("Buzz")
        elif num % 3 == 0:
            result.append("Fizz")
        else:
            result.append(num)
    return result
