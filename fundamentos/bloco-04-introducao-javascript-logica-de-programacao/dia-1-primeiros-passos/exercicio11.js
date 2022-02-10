function calcAliquotaINSS(salario) {
    if (salario <= 1556.64)
        return salario - (salario * 0.08);
    if (salario > 1556.64 && salario <= 2594.92)
        return salario - (salario * 0.09);
    if (salario > 2594.92 && salario <= 5189.82)
        return salario - (salario * 0.11);
    if (salario > 5189.82)
        return salario - 570.88;
}

function calcAliquotaIR(salario) {
    if (salario <= 1903.98)
        return salario;
    if (salario > 1903,98 && salario <= 2826,65)
        return salario -((salario * 0.075) - 142.8);
    if (salario > 2826.65 && salario <= 3751,05)
        return salario - ((salario * 0.15) - 354.8);
    if (salario > 3751,05 && salario <= 4664,68)
        return salario - ((salario * 0,225) - 636.13);
    if (salario > 4664,68)
        return salario - ((salario * 0,275) - 869.36);
}

const salarioBruto = 3000;

const salarioLiquido = calcAliquotaIR(calcAliquotaINSS(salarioBruto));

console.log(salarioLiquido);