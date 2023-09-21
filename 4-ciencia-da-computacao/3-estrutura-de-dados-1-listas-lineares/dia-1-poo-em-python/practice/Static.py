class Classe:
    atributo_da_classe = 1

    def __init__(self):
        self.atributo_do_objeto = 2

    def método_normal(self):
        print(self)

    @staticmethod
    def metodo_estatico():
        print("Olá")

    @classmethod
    def seta_atributo_da_classe(cls, valor):
        cls._atributo_da_classe = valor

    @classmethod
    def retorna_atributo_da_classe(cls):
        return cls._atributo_da_classe


objeto_1 = Classe()
Classe.metodo_estatico()
objeto_1.metodo_estatico()

objeto_1 = Classe()
objeto_2 = Classe()

# print(Classe.atributo_da_classe)  # Saída: 1
# print(objeto_1.atributo_da_classe)  # Saída: 1
# print(objeto_2.atributo_da_classe)  # Saída: 1

Classe.atributo_da_classe = 2
# print(Classe.atributo_da_classe)  # Saída: 2
# print(objeto_1.atributo_da_classe)  # Saída: 2
# print(objeto_2.atributo_da_classe)  # Saída: 2

objeto_1.atributo_da_classe = 3
# print(Classe.atributo_da_classe)  # Saída: 2
# print(objeto_1.atributo_da_classe)  # Saída: 3
# print(objeto_2.atributo_da_classe)

# print(Classe.retorna_atributo_da_classe())  # Saída: 1
# print(objeto_1.retorna_atributo_da_classe())  # Saída: 1
# print(objeto_2.retorna_atributo_da_classe())  # Saída: 1

Classe.seta_atributo_da_classe(2)
# print(Classe.retorna_atributo_da_classe())  # Saída: 2
# print(objeto_1.retorna_atributo_da_classe())  # Saída: 2
# print(objeto_2.retorna_atributo_da_classe())  # Saída: 2

objeto_1.seta_atributo_da_classe(3)
# print(Classe.retorna_atributo_da_classe())  # Saída: 3
# print(objeto_1.retorna_atributo_da_classe())  # Saída: 3
# print(objeto_2.retorna_atributo_da_classe())  # Saída: 3
