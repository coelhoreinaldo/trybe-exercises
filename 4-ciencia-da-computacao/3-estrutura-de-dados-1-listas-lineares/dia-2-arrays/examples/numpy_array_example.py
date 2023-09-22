import numpy as np

myarray = np.array([], dtype=int)

myarray = np.insert(myarray, 0, 5)
myarray = np.insert(myarray, 1, 3)
myarray = np.insert(myarray, 2, 5)
print("Após adicionar alguns valores: ", myarray)

myarray = np.insert(myarray, 1, 4)
print("Após inserção em índice intermediário: ", myarray)

myarray = np.delete(myarray, 0)
print("Após remover um valor:", myarray)
