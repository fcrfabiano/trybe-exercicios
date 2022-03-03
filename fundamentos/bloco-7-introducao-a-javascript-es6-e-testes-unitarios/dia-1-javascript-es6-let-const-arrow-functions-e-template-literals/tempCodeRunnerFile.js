const fatorial = n => {
    let resultado = 1;

    for (let i = 1; i <= n; i += 1) {
        resultado = resultado * i;
    }

    return (n < 0) ? 'O número precisa ser maior que 0' : resultado;
}

console.log(fatorial(5));