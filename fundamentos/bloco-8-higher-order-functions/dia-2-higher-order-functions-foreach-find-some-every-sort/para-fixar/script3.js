const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (array) => array.find((item) => item.length === 5);

console.log(findNameWithFiveLetters(names));