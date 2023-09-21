from abc import ABC, abstractmethod


class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self):
        ...

    def perimetro(self):
        ...


class Quadrado(FiguraGeometrica):
    def __init__(self, lado: int) -> None:
        self.lado = lado

    def area(self):
        return self.lado * self.lado

    def perimetro(self):
        return 4 * self.lado
