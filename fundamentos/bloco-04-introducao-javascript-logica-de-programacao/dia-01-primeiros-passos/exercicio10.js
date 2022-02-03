function valorCustoTotal(valorCusto, impostoSobreCusto) {
    if (valorCusto < 0) {
        return "Valor de Custo não pode ser menor que zero";
    }
    
    const porcentagem = impostoSobreCusto / 100;
    const total = (valorCusto / (1-porcentagem));

    return total;
}

function lucro(valorVenda, valorCustoTotal) {
    const lucro = valorVenda - valorCustoTotal;

    if (Math.sign(lucro) === -1) {
        return "Você está no prejuízo";
    }

    if (lucro === 0) {
        return "Produto não está trazendo lucros";
    }

    return lucro;
}

const custoTotal = valorCustoTotal(166, 20);

console.log(lucro(207.5, custoTotal));