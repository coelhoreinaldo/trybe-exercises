from stack import Stack


def is_valid(string):
    if len(string) % 2 != 0:
        return False

    stack = Stack()

    for char in string:
        if char not in "({[]})":
            return False

        if char in "([{":
            stack.push(char)
        elif char == ")" and not stack.is_empty() and stack.peek() == "(":
            stack.pop()
        elif char == "]" and not stack.is_empty() and stack.peek() == "[":
            stack.pop()
        elif char == "}" and not stack.is_empty() and stack.peek() == "{":
            stack.pop()
        else:
            return False

    return stack.is_empty()


string = "()"  # saída: True
# print(is_valid(string))

string = "))(("  # saída: False
# print(is_valid(string))

string = "()[]{}"  # saída: True
# print(is_valid(string))
#
string = "((])"  # saída: False
# print(is_valid(string))

string = "({[{([{}])}]})"
print(is_valid(string))
