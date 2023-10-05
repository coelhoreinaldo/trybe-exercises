def longer_no_repeating_substring_len(string):
    # início da substring analisada
    sub_start = 0
    # tamanho da substring sem repetir letras
    size_sub = 0
    # índice inicial da maior substring
    start_index = 0
    # dicionário onde vamos armazenar as letras da string
    position = {}

    for i in range(0, len(string)):
        # insere cada letra da string no dicionário position
        # como chave, e sua posição, o valor
        if string[i] not in position:
            position[string[i]] = i

        # se a letra já estiver no dicionário
        else:
            # e o índice dela for maior que o índice de
            # início da substring analisada anteriormente
            if position[string[i]] >= sub_start:
                # ele calcula o tamanho dessa substring nova
                currlen = i - sub_start
                # e caso seja maior que o da anterior
                # substitui pela nova
                if size_sub < currlen:
                    size_sub = currlen
                    # e o ínice inicial passa a ser
                    # o inicial dessa substring mais longa
                    start_index = sub_start
                # a nova substring vai começar depois
                # da última posição conhecida da letra
                # para evitar repetições
                sub_start = position[string[i]] + 1
            # atualiza a última posição
            # conhecida da letra
            position[string[i]] = i
    # compara o tamanho da última substring
    # com o tamanho da maior substring
    # e atualiza os valores
    if size_sub < i - sub_start:
        size_sub = i - sub_start
        start_index = sub_start
    # fatiamos a palavra de acordo com os índices
    return string[start_index : (start_index + size_sub)]


string = "serdevemuitolegalmasehprecisoestudarbastante"

print(longer_no_repeating_substring_len(string))
