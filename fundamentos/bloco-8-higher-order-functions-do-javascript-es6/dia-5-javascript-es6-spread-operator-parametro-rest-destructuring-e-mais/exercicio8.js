// escreva greet abaixo
const greet = (name, greetin = 'Hi') => (`${greetin} ${name}`);

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'