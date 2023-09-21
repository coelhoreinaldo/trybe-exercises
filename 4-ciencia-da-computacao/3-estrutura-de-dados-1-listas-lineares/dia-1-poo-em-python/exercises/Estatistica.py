from collections import Counter


class Estatistica:
    def __init__(self, numbers):
        self.numbers = sorted(numbers)

    def media(self):
        return sum(self.numbers) / len(self.numbers)

    def mediana(self):
        mid = len(self.numbers) // 2
        if len(self.numbers) % 2 == 0:
            return (self.numbers[mid] + self.numbers[mid - 1]) / 2
        return self.numbers[mid]

    def moda(self):
        number, _ = Counter(self.numbers).most_common()[0]
        return number


estatistica = Estatistica([3, 4, 6, 7, 8, 9, 9])

# print(estatistica.media())
# print(estatistica.mediana())
print(estatistica.moda())
