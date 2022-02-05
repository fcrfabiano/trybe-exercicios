// função que recebe o numero
// função percorre cada numero até o numero maximo
// 

function fatorial(num) {
    if (num < 2)
        return 1
    else
        return num * fatorial(num-1);
}

console.log(fatorial(10));
