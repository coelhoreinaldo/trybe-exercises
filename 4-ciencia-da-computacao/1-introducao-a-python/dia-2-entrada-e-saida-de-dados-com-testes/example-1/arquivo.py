import sys


# if __name__ == "__main__":
#     for argument in sys.argv:
#         print("Received -> ", argument)


print("Maria", "João", "Miguel", "Ana")  # saída: Maria João Miguel Ana
print(
    "Maria", "João", "Miguel", "Ana", sep=", "
)  # saída: Maria, João, Miguel, Ana


print("Na mesma", end=" ")
print("linha.")


err = "Arquivo não encontrado"
print(f"Erro aconteceu: {err}", file=sys.stderr)
