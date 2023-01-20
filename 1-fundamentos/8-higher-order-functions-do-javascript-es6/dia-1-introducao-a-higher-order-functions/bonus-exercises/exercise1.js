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

const dragonAttack = (dragon) => {
  const minDamage = 15;
  const maxDamage = Math.ceil(Math.random() * dragon.strength)

  return maxDamage > minDamage ? maxDamage : minDamage
};

dragonAttack(dragon)

const warriorAttack = (warrior) => {
  const minDamage = warrior.strength
  const maxDamage = Math.ceil(Math.random() * (minDamage * warrior.weaponDmg))

  return maxDamage > minDamage ? maxDamage : minDamage
}

warriorAttack(warrior)

const mageAttack = (mage) => {
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

mageAttack(mage)

const gameActions = {
  warriorTurn: (warriorAttack) => {
  const warriorDamage = warriorAttack(warrior)
  dragon.healthPoints -= warriorDamage;
  warrior.damage = warriorDamage;
  // Crie as HOFs neste objeto.
  },
  mageTurn: (mageAttack) => {
  const mageDamage = mageAttack(mage);
  dragon.healthPoints -= mageDamage.damageDealt;
  mage.damage = mageDamage.damageDealt;
  mage.mana -= mageDamage.manaSpent;
  },
  dragonTurn: (dragonAttack) => {
  const dragonDamage = dragonAttack(dragon);
  warrior.healthPoints -= dragonDamage;
  mage.healthPoints -= dragonDamage;
  dragon.damage = dragonDamage
  },
  finalResult: () => battleMembers
};

gameActions.warriorTurn(warriorAttack)
gameActions.mageTurn((mageAttack))
gameActions.dragonTurn((dragonAttack));

console.log(gameActions.finalResult());
