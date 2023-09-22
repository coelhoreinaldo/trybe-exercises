import sys
from array import array

myarray = array("I")

myarray.insert(0, 5)
myarray.insert(1, 3)
myarray.insert(2, 5)
print("Após adicionar alguns valores: ", myarray)


myarray.insert(1, 4)
print("Após inserção em índice intermediário: ", myarray)

myarray.pop(0)
print("Após remover um valor:", myarray)

elements = list(range(100))
print("Tamanho da lista:", sys.getsizeof(elements))
array_from_list = array("I", elements)
print("Tamanho do array", sys.getsizeof(array_from_list))
