// Desafio 11
function generatePhoneNumber(number) {
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  let counter = number.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  for (const n of number) {
    if (n < 0 || n > 9 || counter[n] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let formattedNumber = '';

  formattedNumber = number.join('');
  formattedNumber = formaterPhoneNumber(formattedNumber);

  return formattedNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (
    (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) ||
    (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) ||
    (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA))
  ) {
    return true;
  }

  return false;
}

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

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
