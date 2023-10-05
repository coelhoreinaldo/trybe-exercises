clara = [0, 1, 5, 9, 10]
# nota de partida: 5
# redutor: 1
# pt: 4

marco = [0, 2, 8, 9, 10]
# nota de partida: 8
# redutor: 2
# pt individual: 6

# Quem ganhou: Marco

entrada = {"Clara": [0, 1, 5, 9, 10], "Marco": [0, 2, 8, 9, 10]}

# saída: 'Marco'


def nota_partida(escolhas, adivinhas):
    return max(escolhas.difference(adivinhas))


def nota_redutor(escolhas, adivinhas):
    return min(escolhas.difference(adivinhas))


def nota_individual(escolhas, adivinhas):
    set_escolhas = set(escolhas)
    set_adivinhas = set(adivinhas)

    return nota_partida(set_escolhas, set_adivinhas) - nota_redutor(
        set_escolhas, set_adivinhas
    )


def blefe(matchs):
    players = list(matchs.keys())

    primeira_nota = nota_individual(matchs[players[0]], matchs[players[1]])

    segunda_nota = nota_individual(matchs[players[1]], matchs[players[0]])

    if primeira_nota > segunda_nota:
        return players[0]
    elif primeira_nota < segunda_nota:
        return players[1]
    else:
        return None


who_won = blefe(entrada)

if who_won:
    print(f"Quem ganhou: {who_won}")
else:
    print("Empate")


print(blefe(entrada))
