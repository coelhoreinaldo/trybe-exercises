class Pessoa:
    def __init__(self, nome, idade=None, saldo_na_conta=None):
        self.nome = nome
        self.idade = idade
        self.saldo_na_conta = saldo_na_conta
        self.brinquedos = []


pessoa_1 = Pessoa("Marcelo", 22, 700)
pessoa_2 = Pessoa("Matheus")
pessoa_3 = Pessoa("Maria", 33)
pessoa_4 = Pessoa("Márcia", saldo_na_conta=100)
