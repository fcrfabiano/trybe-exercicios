const books = require('./data.js');

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];

function containsA(arr) {
    const word = Array.from(arr.join());
    const arrayWord = word.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;

        return acc;
    }, {});

    return arrayWord.a + arrayWord.A;
}

console.log(containsA(names));