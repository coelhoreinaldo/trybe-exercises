from node import Node


class LinkedList:
    def __init__(self):
        self.head.value = None
        self.__length = 0

    def __str__(self) -> str:
        return f"LinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self) -> int:
        return self.__length

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head_value
        self.head_value = first_value
        self.__length += 1

    def insert_last(self, value):
        last_value = Node(value)
        current_value = self.head_value

        if current_value is None:
            return self.insert_first(value)

        while current_value.next:
            current_value = current_value.next
        current_value.next = last_value
        self.__length += 1
