class Queue:
    def __init__(self):
        self.queue = list()

    def enqueue(self, value):
        self.queue.append(value)

    def dequeue(self):
        if len(self.queue) == 0:
            return None

        return self.queue.pop(0)
