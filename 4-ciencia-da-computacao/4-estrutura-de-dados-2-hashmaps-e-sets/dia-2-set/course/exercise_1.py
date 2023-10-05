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

    def union(self, conjunto_b):
        new_set = Conjunto()

        for index in range(1001):
            if self.set[index] or conjunto_b.set[index]:
                new_set.add(index)

        return new_set

    def intersection(self, conjunto_b):
        new_set = Conjunto()

        for index in range(1001):
            if self.set[index] and conjunto_b.set[index]:
                new_set.add(index)

        return new_set

    def difference(self, conjunto_b):
        new_set = Conjunto()

        for index in range(1001):
            if self.set[index] and not conjunto_b.set[index]:
                new_set.add(index)

        return new_set


if __name__ == "__main__":
    collection = Conjunto()

    for item in [0, 10, 100, 1000]:
        collection.add(item)

    # print(collection)

    collection2 = Conjunto()

    for i in [1, 2, 3]:
        collection2.add(i)

    # print(collection2)
    # print(collection2.__contains__(3))

    collection3 = Conjunto()
    for i in range(0, 11):
        collection3.add(i)
    collection4 = Conjunto()
    for i in range(10, 21):
        collection4.add(i)

    # print(collection3.union(collection4))

    collection5 = Conjunto()
    for i in [1, 2, 3]:
        collection5.add(i)

    collection6 = Conjunto()
    for i in [3, 4, 5]:
        collection6.add(i)

    print(collection5.intersection(collection6))

    collection7 = Conjunto()
    for i in [0, 3, 6, 9]:
        collection7.add(i)

    collection8 = Conjunto()
    for i in [12, 15, 18]:
        collection8.add(i)

    print(collection7.intersection(collection8))
    print(collection7.difference(collection8))
