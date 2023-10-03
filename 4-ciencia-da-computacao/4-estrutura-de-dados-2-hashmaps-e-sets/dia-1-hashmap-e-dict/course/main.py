class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name

    def __str__(self) -> str:
        return f"(id: {self.id_num}, name: {self.name})"

    def __repr__(self) -> str:
        return f"(id: {self.id_num}, name: {self.name})"


class HashMap:
    def __init__(self):
        self._buckets = [None for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address] = employee

    def get_value(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None


employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]

hashmap = HashMap()

for e_id, e_name in employees:
    curr_employee = Employee(e_id, e_name)
    hashmap.insert(curr_employee)

print(hashmap.get_value(23))
