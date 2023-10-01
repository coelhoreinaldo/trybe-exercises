from linked_list import LinkedList


class Stack:
    def __init__(self) -> None:
        self._data = LinkedList()

    def is_empty(self):
        self._data.is_empty()

    def push(self, value):
        self._data.insert_last(value)

    def pop(self, value):
        self._data.remove_last(value)

    def peek(self):
        self._data.get_element_at(len(self._data))
