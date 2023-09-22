import sys


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


array = ListaArray()

# index = 0

# while index < len(array):
#     print("Index:", index, ", Nome:", array.get(index))
#     index += 1

# ...

array.set(0, "Marcos")
array.set(1, "Patrícia")

array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)

array.set(2, "Matheus")
array.set(3, "Giovana")

array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)

array.set(4, "Alberto")
array.set(5, "Marta")
array.set(6, "Túlio")
array.set(7, "Michelle")
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)  # 120
