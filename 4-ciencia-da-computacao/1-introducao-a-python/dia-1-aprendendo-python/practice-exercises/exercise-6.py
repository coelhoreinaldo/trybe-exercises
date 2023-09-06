def get_triangle_type(a1, a2, a3):
    is_triangle = a1 + a2 > a3 and a2 + a3 > a1 and a3 + a1 > a2

    if not is_triangle:
        return "não é triângulo"
    elif a1 == a2 and a2 == a3:
        return "triângulo equilátero"
    elif a1 != a2 and a2 != a3 and a3 != a1:
        return "triângulo escaleno"
    else:
        return "triângulo isósceles"


print(get_triangle_type(12, 13, 14))
