from exercise_5 import fizzbuzz


def numbers_divisible_by_3_should_return_fizz():
    assert fizzbuzz(3) is [1, 2, "Fizz"]


def numbers_divisible_by_5_should_return_buzz():
    assert fizzbuzz(5) is [1, 2, "Fizz", 4, "Buzz"]


def numbers_divisible_by_3_and_5_should_return_fizzbuzz():
    result = [
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
    ]
    assert fizzbuzz(5) is result
