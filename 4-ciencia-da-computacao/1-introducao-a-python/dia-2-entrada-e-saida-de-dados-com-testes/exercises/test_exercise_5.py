from exercise_5 import fizzbuzz


def test_numbers_divisible_by_3_should_return_fizz():
    assert fizzbuzz(3) == [1, 2, "Fizz"]


def test_numbers_divisible_by_5_should_return_buzz():
    assert fizzbuzz(5) == [1, 2, "Fizz", 4, "Buzz"]


def test_numbers_divisible_by_3_and_5_should_return_fizzbuzz():
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
    assert fizzbuzz(15) == result
