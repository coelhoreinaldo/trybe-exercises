from linked_list import LinkedList


class Queue:
    def __init__(self) -> None:
        self._data = LinkedList()

    def is_empty(self):
        self._data.is_empty()

    def enqueue(self, value):
        self._data.insert_last(value)

    def dequeue(self, value):
        self._data.remove_first(value)

    def peek(self):
        self._data.get_element_at(0)
