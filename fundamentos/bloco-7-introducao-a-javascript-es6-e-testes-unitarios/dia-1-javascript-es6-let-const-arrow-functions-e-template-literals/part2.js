// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .
// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .
// Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:

const fatorial = n => {
    let resultado = 1;

    for (let i = 1; i <= n; i += 1) {
        resultado = resultado * i;
    }

    return (n < 0) ? 'O número precisa ser maior que 0' : resultado;
}

console.log(fatorial(5));

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'