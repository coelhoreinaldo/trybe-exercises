from abc import ABC, abstractmethod


class Database(ABC):
    @abstractmethod
    def execute(self, query):
        ...


class MongoDatabase(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mongo")


class MySQLDatabase(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mysql")


def minha_func(database: Database):
    if isinstance(database, Database):
        database.execute("query qualquer")
    else:
        print(f"{database} não é um Database válido")


db1 = MongoDatabase()
db2 = MySQLDatabase()


minha_func(db1)
minha_func(db2)
minha_func("db inválido")
