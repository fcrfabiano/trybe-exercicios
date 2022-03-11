const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some(item => item === name);

console.log(hasName(names, 'Ana'))