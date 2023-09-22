# import sys


class ListaArray:
    def __init__(self):
        self.data = []

    def __len__(self):
        return len(self.data)

    def __str__(self):
        return str(self.data)

    def get(self, index):
        return self.data[index]

    def set(self, index, value):
        self.data.insert(index, value)

    def remove(self, index):
        return self.data.pop(index)

    def update(self, index, value):
        self.data[index] = value


array = ListaArray()

# index = 0

# while index < len(array):
#     print("Index:", index, ", Nome:", array.get(index))
#     index += 1

# ...

array.set(0, "Marcos")
array.set(1, "Patrícia")

# array_memory_size = sys.getsizeof(array.data)
# print(array_memory_size)
print(array)

# array.set(0, "Valeria")
# print(array)

# print(array)

array.remove(0)

array.set(1, "Giovana")
print(array)
array.update(1, "Marla")
print(array)
