trybe_course = ["Introdução", "Front-end", "Back-end"]

# exercise-5

trybe_course.append("Ciência da Computação")

# exercise-6

trybe_course[0] = "Fundamentos"

# Tuple

user = (
    "Will",
    "Marcondes",
    42,
)  # elementos são definidos separados por vírgula, envolvidos por parênteses

user[0]  # acesso também por índices

# Set

permissions = {
    "member",
    "group",
}  # elementos separados por vírgula, envolvidos por chaves

permissions.add("root")  # adiciona um novo elemento ao conjunto

permissions.add(
    "member"
)  # como o elemento já existe, nenhum novo item é adicionado ao conjunto

permissions.union({"user"})  # retorna um conjunto resultado da união

permissions.intersection(
    {"user", "member"}
)  # retorna um conjunto resultante da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos

# exercise-7

var = set()

var.add("Reinaldo Coelho")

# print(var)

# Frozen Set

permissions = frozenset(
    ["member", "group"]
)  # assim como o set, qualquer estrutura iterável pode ser utilizada para
# criar um frozenset

permissions.union(
    {"user"}
)  # novos conjuntos imutáveis podem ser criados à partir do original, mas o
# mesmo não pode ser modificado

permissions.intersection(
    {"user", "member"}
)  # retorna um conjunto resultante da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos

# Dict

people_by_id = {
    1: "Maria",
    2: "Fernanda",
    3: "Felipe",
}  # elementos no formato "chave: valor" separados por vírgula, envolvidos por
# chaves

people_by_name = {
    "Maria": 1,
    "Fernanda": 2,
    "Felipe": 3,
}  # outro exemplo, dessa vez usando strings como chaves. As aspas são
# necessárias para que o Python não ache que `Maria`, `Fernanda` e `Felipe`
# sejam variáveis.

# elementos são acessados por suas chaves
people_by_id[1]  # saída: Maria

# elementos podem ser removidos com a palavra chave del
del people_by_id[1]
people_by_id.items()  # dict_items([(2, "Fernanda"), (3, "Felipe")])
# é retornada uma coleção iterável de tuplas contendo chaves e valores

# exercise-8

info = {
    "personagem": "Margarida",
    "origem": "Pato Donald",
    "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

# info.update({"recorrente": "Sim"})
info["recorrente"] = "Sim"
print(info)

# exercise-9

# info.pop("origem")

del info["origem"]
print(info)

# Range

# vamos converter o range em uma lista para ajudar na visualização

# definimos somente o valor de parada
list(range(5))  # saída: [0, 1, 2, 3, 4]

# definimos o valor inicial e o de parada
list(range(1, 6))  # saída: [1, 2, 3, 4, 5]

# definimos valor inicial, de parada e modificamos o passo para 2
list(range(1, 11, 2))  # saída: [1, 3, 5, 7, 9]

# podemos utilizar valores negativos para as entradas também
list(range(10, 0, -1))  # saída: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

# exercise-10

my_array = [20, 20, 1, 2]

freq_dict = {}

for item in my_array:
    if item in freq_dict:
        freq_dict[item] += 1
    else:
        freq_dict[item] = 1

for key, valor in freq_dict.items():
    print(f"{key} : {valor}")

# Saída
# 20: 2
# 1: 1
# 2: 1
