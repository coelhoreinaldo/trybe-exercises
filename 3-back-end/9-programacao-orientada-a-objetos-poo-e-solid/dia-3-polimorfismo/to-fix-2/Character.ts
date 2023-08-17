interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

interface IModel {
  getAll(): Promise<DbCharacter[]>;
  getById(id: number): Promise<DbCharacter>;
  create(character: Character): Promise<Character>;
  update(id: number, character:Character): Promise<Character>;
  remove(id: number): Promise<boolean>;
}