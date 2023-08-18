abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;

  static characterPresentation(character: Character): void {
    character.talk();
    character.specialMove();
  }
}

class MeleeCharacter extends Character {
  talk(): void {
    console.log('Bruauahhhhh!');
  }

  specialMove(): void {
    console.log('Double dash');
  }
}

class LongRangeCharacter extends Character {
  talk(): void {
    console.log('Shooooooooot');
  }

  specialMove(): void {
    console.log('Back dash');
  }
}

const yoshi = new MeleeCharacter();
const samus = new LongRangeCharacter();;

// yoshi.specialMove();
// yoshi.talk();
// samus.specialMove()

Character.characterPresentation(samus)
