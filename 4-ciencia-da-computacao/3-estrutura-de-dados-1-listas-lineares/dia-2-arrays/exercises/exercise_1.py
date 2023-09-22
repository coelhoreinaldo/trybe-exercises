def verify_max_time_ok(collected_values):
    max_time = 0
    curr_time = 0

    for status in collected_values:
        if status == 1:
            curr_time += 1
        else:
            curr_time = 0
        if curr_time > max_time:
            max_time = curr_time

    return max_time


valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
print(verify_max_time_ok(valores_coletados))

valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
print(verify_max_time_ok(valores_coletados))
