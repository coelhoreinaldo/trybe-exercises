fruits = [
    {"name": "Banana", "price": 10.00},
    {"name": "Maçã", "price": 8.00},
    {"name": "Melancia", "price": 4.00},
    {"name": "Uva", "price": 12.00},
    {"name": "Manga", "price": 6.00},
]


def find_biggest(array):
    biggest = array[0]
    smallest = array[0]

    for fruit in array:
        if fruit["price"] > biggest["price"]:
            biggest = fruit
        if fruit["price"] < smallest["price"]:
            smallest = fruit

    return (biggest, smallest)


find_biggest(fruits)
