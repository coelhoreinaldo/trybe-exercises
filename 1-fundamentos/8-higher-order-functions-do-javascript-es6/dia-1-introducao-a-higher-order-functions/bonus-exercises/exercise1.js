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

const dragonDamage = (dragon) => {
  const minDamage = 15;
  const maxDamage = Math.ceil(Math.random() * dragon.strength)

  return maxDamage > minDamage ? maxDamage : minDamage
};

const warriorAttack = (warrior) => {
  const minDamage = warrior.strength
  const maxDamage = Math.ceil(Math.random() * (minDamage * warrior.weaponDmg))

  return maxDamage > minDamage ? maxDamage : minDamage
}

const mageAttack = () => {
  let obj = {}
  const minDmg = mage.intelligence;
  const maxDmg = Math.ceil(Math.random() * (minDmg * 2));
  const damageDealt = {damageDealt: maxDmg > minDmg ? maxDmg : minDmg}
  const manaSpent = {manaSpent: mage.mana >= 15 ? 15 : 0}

  if (mage.mana < 15) {
    damageDealt.damageDealt = 'Não possui mana suficiente'
  }
  return Object.assign(obj, damageDealt, manaSpent)
}

mageAttack();

const gameActions = {
  warriorTurn: (warriorAttack) => {
  const warriorDamage = warriorAttack(warrior)
  dragon.healthPoints -= warriorDamage;
  warrior.damage = warriorAttack();
  // Crie as HOFs neste objeto.
  }
};

gameActions.warriorTurn(warriorAttack)

console.log(dragon.healthPoints);
console.log(warrior.damage);