# Podemos instanciar um set vazio ou inicializar com valores de um objeto
# iterável, como uma lista
conjunto_a = set()

# Ao inicializar com valores de uma lista, os valores duplicados serão
# desconsiderados e a ordem de inserção será perdida.
conjunto_b = set([1, 1, 2, 3, 3, 3])

# Add - adiciona o elemento ao conjunto
conjunto_a.add(5)
conjunto_a.add(3)
conjunto_a.add(0)

# sets admitem objetos mistos. Ou seja, admitem ter _strings_ com _ints_
# dentro de um mesmo objeto, por exemplo.
conjunto_a.add("elemento")

# Temos 2 jeitos de remover elementos:
# - remove() causa erro caso o elemento não esteja no set;
# - discard() não causa erro caso o elemento não esteja no set.

# Não vai dar erro
conjunto_b.remove(3)

# Vai dar erro pois já removemos esse elemento e set não guarda duplicatas
# conjunto_b.remove(3)

# Não vai dar erro
conjunto_b.discard(3)

# Pop - remove e retorna um elemento aleatório do set
# - set é um objeto iterável, mas não conseguimos garantir em que ordem os
#   elementos serão acessados.
# - A função pop () é útil quando queremos trabalhar com algum elemento do
#   set, mas não sabemos de antemão quais elementos estão dentro dele.
some_element = conjunto_a.pop()

# clear() remove todos os itens do set
conjunto_b.clear()

# Consulta
# A consulta é feita com o operador "in"
if 2 in conjunto_a:
    print("2 está em A")

if 7 not in conjunto_a:
    print("7 não está em A")
