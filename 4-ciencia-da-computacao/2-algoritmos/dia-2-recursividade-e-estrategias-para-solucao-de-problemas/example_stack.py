def a():
    print("Início de a()")
    b()
    print("Fim de a()")


def b():
    print("Início de b()")
    c()
    print("Fim de b()")


def c():
    print("Início de c()")
    print("Fim de c()")


if __name__ == "__main__":
    a()


# inicio de a()
# inicio de b()
# inicio de c()
# fim de c()
# fim de b()
# fim de a()
