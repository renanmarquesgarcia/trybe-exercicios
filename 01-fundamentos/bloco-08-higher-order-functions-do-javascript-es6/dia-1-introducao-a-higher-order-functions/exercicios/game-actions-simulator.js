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


// Crie uma função que retorna o dano do dragão. O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).  
// Solução 1
const dragonDamage = () => {
  const min = 15;
  let max = Math.floor(dragon.strength);
  const demage = Math.floor(Math.random() * (max - min + 1)) + min;
  return demage;
}
  
// console.log(dragonDamage());

// Solução 2
const dragonAttack = (dragon) => {
  const minDmg = 15;
  const maxDmg = Math.floor(Math.random() * dragon.strength);
  const dragonDmg = maxDmg > minDmg ? maxDmg : minDmg;
  return dragonDmg;
};

// console.log(dragonAttack(dragon));

// --------------------------------------------------------------------------------------

// Crie uma função que retorna o dano causado pelo warrior. O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
// Solução 1
const warriorDamage = () => {
  const min = warrior.strength;
  let max = (min * warrior.weaponDmg);
  const demage = Math.floor(Math.random() * (max - min + 1)) + min;
  return demage;
}

// console.log(warriorDamage());

// Solução 2
const warriorAttack = (warrior) => {
  const minDmg = warrior.strength;
  const maxDmg = Math.floor(Math.random() *(minDmg * warrior.weaponDmg));
  const warriorDmg = maxDmg > minDmg ? maxDmg : minDmg;
  return warriorDmg;
};

console.log(warriorAttack(warrior));

// --------------------------------------------------------------------------------------------
// Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”) e a mana gasta é 0.

const danoMago = (mage) => {
  const min = mage.intelligence;
  const max = min * 2;
  const mana = mage.mana;
  const damage = Math.floor(Math.random() * (max - min + 1)) + min;
  const vida = {
    mana: 0,
    damage: 'Não possui mana suficiente',
  }
  if(mana >= 15) {    
    vida.mana = 15;
    vida.damage = damage;
    return vida;
  }  
  return vida;
}

console.log(danoMago(mage));


