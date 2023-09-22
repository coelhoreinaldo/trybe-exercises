def count_servers(grid):
    rows, columns = len(grid), len(grid[0])
    servers_in_rows = [0 for _ in range(rows)]
    servers_in_columns = [0 for _ in range(columns)]

    for i in range(rows):
        for j in range(columns):
            if grid[i][j] == 1:
                servers_in_rows[i] += 1
                servers_in_columns[j] += 1

    answer = 0
    for i in range(rows):
        for j in range(columns):
            if grid[i][j] == 1 and (
                servers_in_rows[i] > 1 or servers_in_columns[j] > 1
            ):
                answer += 1

    return answer


servidores = [[1, 0], [0, 1]]
resultado: 0
print(count_servers(servidores))


servidores = [[1, 0], [1, 1]]
resultado: 3
print(count_servers(servidores))


servidores = [[1, 0, 0], [1, 0, 0], [0, 0, 1]]
resultado: 2
print(count_servers(servidores))
