trybe_course = ["Introdução", "Front-end", "Back-end"]

# exercise-5 

trybe_course.append('Ciência da Computação')

# exercise-6

trybe_course[0] = 'Fundamentos'

# Tuple

user = ("Will", "Marcondes", 42)  # elementos são definidos separados por vírgula, envolvidos por parênteses

user[0]  # acesso também por índices

# Set

permissions = {"member", "group"}  # elementos separados por vírgula, envolvidos por chaves

permissions.add("root")  # adiciona um novo elemento ao conjunto

permissions.add("member")  # como o elemento já existe, nenhum novo item é adicionado ao conjunto

permissions.union({"user"})  # retorna um conjunto resultado da união

permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos

# exercise-7

var = set();

var.add('Reinaldo Coelho')

print(var)