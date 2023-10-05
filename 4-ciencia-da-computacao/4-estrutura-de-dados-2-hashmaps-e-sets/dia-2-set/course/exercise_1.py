class Conjunto:
    def __init__(self) -> None:
        self.set = [False] * 1001
        self.last_element = 0

    def __str__(self) -> str:
        string = "{"

        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "
        string += "}"
        return string

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    def __contains__(self, item):
        return self.set[item]


if __name__ == "__main__":
    collection = Conjunto()

    for item in [0, 10, 100, 1000]:
        collection.add(item)

    # print(collection)

    collection2 = Conjunto()

    for i in [1, 2, 3]:
        collection2.add(i)

    print(collection2)
    print(collection2.__contains__(3))
