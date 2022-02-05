// função que recebe o numero
// função percorre cada numero até o numero maximo
// 

function fatorial(num) {
    if (num < 2)
        return 1
    else
        return num * fatorial(num-1);
}

function fac(num) {
    let result = 1;
    
    for (let i = 1; i <= num; i+=1) {
        result *= i;
    }

    return result;
}

console.log(fac(10));
