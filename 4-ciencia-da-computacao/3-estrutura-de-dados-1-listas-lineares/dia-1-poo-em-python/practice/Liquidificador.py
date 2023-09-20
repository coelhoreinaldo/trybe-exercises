from Ventilador import Ventilador


class Liquidificador:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.__cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter
    def cor(self, nova_cor):
        if nova_cor.lower() == "turquesa":
            raise ValueError("Não existe liquidificador turquesa")

        self.__cor = nova_cor

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado


liquidificador = Liquidificador("Rosa", 110, 127, 200)
liquidificador.cor = "Azul"


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None
        self.ventilador = None

    def comprar_liquidificador(self, liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador

    def comprar_ventilador(self, ventilador):
        if ventilador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= ventilador.preco
            self.ventilador = ventilador

    def __str__(self) -> str:
        message = f"""
            - {self.nome} - possui {self.saldo_na_conta} reais em sua conta.
            """
        if self.ventilador:
            message += f"- Possui um ventilador ${self.ventilador.cor}"
        else:
            message += "Não possui um ventilador"

        return message


pessoa_cozinheira = Pessoa("Paola Carosella", 1000)
pessoa_cozinheira.comprar_liquidificador(liquidificador)

ventilador = Ventilador(100, "Preto", 100, 127)
pessoa_cozinheira.comprar_ventilador(ventilador)
print(pessoa_cozinheira)
