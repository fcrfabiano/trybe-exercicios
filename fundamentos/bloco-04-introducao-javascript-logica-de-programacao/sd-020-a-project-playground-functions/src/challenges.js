// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  const area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(sentence) {
  const sentenceSplited = sentence.split(' ');

  return sentenceSplited;
}

// Desafio 4
function concatName(arrayNames) {
  const name = arrayNames.shift();
  const lastName = arrayNames.pop();
  const fullName = `${lastName}, ${name}`;

  return fullName;
}

// Desafio 5
function footballPoints(wins, ties) {
  const totalWinsPoints = wins * 3;

  return totalWinsPoints + ties;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let bigNumber = Math.max(...arrayNumbers);
  let counter = 0;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === bigNumber) {
      counter += 1;
    }
  }

  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const cat1Distance = Math.abs(mouse - cat1);
  const cat2Distance = Math.abs(mouse - cat2);

  if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';
  }
  if (cat1Distance > cat2Distance) {
    return 'cat2';
  }
  return 'cat1';
}

// Desafio 8
function fizzBuzz(numbers) {
  let response = [];

  const checkFizzBuzz = (n) =>
    ({
      [n % 5 === 0]: 'buzz',
      [n % 3 === 0]: 'fizz',
      [n % 5 === 0 && n % 3 === 0]: 'fizzBuzz',
      [n % 5 !== 0 && n % 3 !== 0]: 'bug!',
    }.true);

  numbers.forEach((n) => response.push(checkFizzBuzz(n)));

  return response;
}

// Desafio 9
function encode(message) {
  message = message.replace(/a/gi, '1');
  message = message.replace(/e/gi, '2');
  message = message.replace(/i/gi, '3');
  message = message.replace(/o/gi, '4');
  message = message.replace(/u/gi, '5');

  return message;
}

function decode(message) {
  message = message.replace(/[1]/g, 'a');
  message = message.replace(/[2]/g, 'e');
  message = message.replace(/[3]/g, 'i');
  message = message.replace(/[4]/g, 'o');
  message = message.replace(/[5]/g, 'u');

  return message;
}

// Desafio 10
function techList(techNames, name) {
  let list = [];
  if (techNames.length === 0) {
    return 'Vazio!';
  }

  techNames = techNames.sort();

  for (const tech of techNames) {
    const newTech = { tech, name };
    list.push(newTech);
  }

  return list;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
