// Desafio 13
function hydrate(drink) {
    let drinkCounter = 0;
    const regex = /[1-9]/;
    const drinkSplited = drink.split('');
    for (const n of drinkSplited) {
      if (regex.test(n)) {
        drinkCounter += parseInt(n);
      }
    }
  
    return drinkCounter <= 1
      ? `${drinkCounter} copo de água`
      : `${drinkCounter} copos de água`;
  }
  
  module.exports = hydrate;