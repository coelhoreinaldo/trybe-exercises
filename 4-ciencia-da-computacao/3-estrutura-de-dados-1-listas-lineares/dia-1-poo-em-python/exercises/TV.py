class TV:
    def __init__(self, tamanho: int):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if 1 <= self.__volume <= 99:
            self.__volume += 1

    def diminuir_volume(self):
        if 1 <= self.__volume <= 99:
            self.__volume -= 1

    def modificar_canal(self, canal):
        if not 1 <= canal <= 99:
            raise ValueError("Canal não existe")
        self.__canal = canal

    def ligar_Desligar(self):
        self.__ligada = not self.__ligada

    @property
    def volume(self):
        return self.__volume


tv_azul = TV(tamanho=42)

tv_azul.aumentar_volume()
tv_azul.aumentar_volume()
print(tv_azul.volume)
tv_azul.diminuir_volume()
print(tv_azul.volume)

tv_azul.modificar_canal(99)
