const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  const minDamage = 15;
  const maxDamage = Math.ceil(Math.random() * dragon.strength)

  return maxDamage > minDamage ? maxDamage : minDamage
};

dragonDamage();

const warriorDamage = () => {
  const minDamage = warrior.strength
  const maxDamage = Math.ceil(Math.random() * (minDamage * warrior.weaponDmg))

  return maxDamage > minDamage ? maxDamage : minDamage
}

console.log(warriorDamage());