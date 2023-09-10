values = input("Digite valores separados por espaço:")

values_arr = values.split(" ")

total_sum = 0

for value in values_arr:
    if not value.isdigit():
        print(f"Erro ao somar valores, {value} não é um dígito.")
    else:
        total_sum += int(value)

print(total_sum)
