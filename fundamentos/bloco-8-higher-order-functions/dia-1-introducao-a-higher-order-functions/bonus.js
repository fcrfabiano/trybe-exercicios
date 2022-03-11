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

  const dragonDamage = (minDamage, maxDamage) => (Math.floor(Math.random() * (maxDamage - minDamage)) + minDamage);

  const warriorDamage = (minDamage, weaponDmg) => (Math.floor(Math.random() * ((minDamage * weaponDmg) - minDamage)) + minDamage);

  const mageSpentMana = (minDamage, mana) => {
      return {
      damage: (mana > 15) ? (Math.floor(Math.random() * ((minDamage * 2) - minDamage) + minDamage)) : 'Não possui mana suficiente',
      spentMana: (mana > 15) ? mana - 15 : 0
  }};

  const gameActions = {
    warrionTurn: (warriorDamage) => {
        battleMembers.warrior.damage = warriorDamage(battleMembers.warrior.strength, battleMembers.warrior.weaponDmg);
        battleMembers.dragon.healthPoints -= battleMembers.warrior.damage;
    },
    mageTurn: (mageSpentMana) => {
        const mageAction = mageSpentMana(battleMembers.mage.intelligence, battleMembers.mage.mana);
        battleMembers.mage.damage = mageAction.damage;
        battleMembers.mage.mana = mageAction.spentMana;
        battleMembers.dragon.healthPoints -= battleMembers.mage.damage;
    },
    dragonTurn: (dragonDamage) => {
        battleMembers.dragon.damage = dragonDamage(15, battleMembers.dragon.strength);
        battleMembers.warrior.healthPoints -= battleMembers.dragon.damage;
        battleMembers.mage.healthPoints -= battleMembers.dragon.damage;
    },
    actionGameReturn: (warrionTurn, mageTurn, dragonTurn) => {
        warrionTurn(warriorDamage);
        mageTurn(mageSpentMana);
        dragonTurn(dragonDamage);
        return battleMembers;
    }
  };

  console.log(gameActions.actionGameReturn(gameActions.warrionTurn, gameActions.mageTurn, gameActions.dragonTurn));
  