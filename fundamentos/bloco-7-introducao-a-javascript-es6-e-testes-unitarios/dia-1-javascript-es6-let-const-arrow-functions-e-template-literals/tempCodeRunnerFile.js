
const longestWord = (word) => console.log(word.split(' ').sort((a, b) => a.length - b.length).pop());

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'); // retorna 'aconteceu'