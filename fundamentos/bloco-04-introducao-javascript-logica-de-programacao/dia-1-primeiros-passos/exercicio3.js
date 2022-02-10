const numeros = [12, 50, -16];

function bigger(numeros) {
    const numerosOrdenados = numeros.sort();
    const maiorNumero = numerosOrdenados.pop();
    return maiorNumero;
}

console.log(bigger(numeros));