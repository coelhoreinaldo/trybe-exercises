from stack import Stack


def calculate_points(rounds):
    stack = Stack()

    for round in rounds:
        if round == "+":
            last_round = stack.pop()
            penultimate_round = stack.pop()

            current_round = last_round + penultimate_round

            stack.push(penultimate_round)
            stack.push(last_round)
            stack.push(current_round)

        elif round == "D":
            last_round = stack.peek()
            current_round = last_round * 2
            stack.push(current_round)

        elif round == "C":
            stack.pop()

        else:
            stack.push(int(round))

    total = 0

    while not stack.is_empty():
        total += stack.pop()

    return total


#                  1   2   3   6  -6  = 6
print(calculate_points(["1", "2", "+", "D", "C"]))
#                  5           10  15  = 30
print(calculate_points(["5", "2", "C", "D", "+"]))
#                        5    -2             -4    9    5   14
print(calculate_points(["5", "-2", "4", "C", "D", "9", "+", "+"]))
