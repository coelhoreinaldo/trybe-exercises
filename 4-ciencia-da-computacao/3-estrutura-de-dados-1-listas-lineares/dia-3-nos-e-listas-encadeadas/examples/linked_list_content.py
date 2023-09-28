from node import Node


class LinkedList:
    def __init__(self):
        self.head.value = None
        self.__length = 0

    def __str__(self) -> str:
        return f"LinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self) -> int:
        return self.__length
