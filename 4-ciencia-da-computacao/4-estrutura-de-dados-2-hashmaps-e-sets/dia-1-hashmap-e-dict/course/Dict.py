employee_registry = {}

employee_registry[14] = "name1"
employee_registry[23] = "name2"
employee_registry[10] = "name3"
employee_registry[9] = "name4"

print(employee_registry)

employee_registry[10] = "name30"

print(f"Novo valor do id 10, após a atualização: {employee_registry[10]}")

dict1 = {}
dict2 = dict()


dict3 = {1: "name1", 2: "name2"}
print(f"Dicionário 1: {dict1}")
print(f"Dicionário 2: {dict2}")
print(f"Dicionário 3: {dict3}")

dict1[14] = "name1"
print(f"Novo dicionário 1, pós inserção/alteração: {dict1}")

name = dict1[14]
del dict1[14]
print(f"Dicionário 1 pós consulta e deleção: {dict1}")


# exercise 5
dict_comprehension = {x: x * 2 for x in range(3, 21)}
print(dict_comprehension)

# exercise 6
str = "bbbbaaaacccaaaaaaddddddddccccccc"


def count_character(str):
    count = {}
    for char in str:
        if char not in count:
            count[char] = 1
        else:
            count[char] += 1
    return count


print(count_character(str))
str = "coxinha"
print(count_character(str))
