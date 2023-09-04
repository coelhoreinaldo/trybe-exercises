# number = 5;
# counter = 1;
# result = 1;

# while counter < number:
#     result = result * counter
#     counter += 1
    

# print(result)

number = 5
result = 1
# Usamos number + 1 pro range ir até o number
for factor in range(1, number+1):
    result *= factor
print(result)