abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  talk(): void {
    console.log('Bruauahhhhh!');
  }

  specialMove(): void {
    console.log('Double dash');
  }
}

const warrior = new MeleeCharacter();
warrior.specialMove();
warrior.talk();

class LongRangeCharacter extends Character {
  talk(): void {
    console.log('Shooooooooot');
  }

  specialMove(): void {
    console.log('Back dash');
  }
}

const archer = new LongRangeCharacter();
archer.specialMove()
