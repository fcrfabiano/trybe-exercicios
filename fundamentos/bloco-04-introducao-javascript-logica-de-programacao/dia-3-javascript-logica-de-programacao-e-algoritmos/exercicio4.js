function isPar(k) {
    return k % 2 == 0;
}

function isDivisible(a, b) {
    return a % b == 0;
}

function identificarPrimo(n) {
    if (n == 2) {
        return true;
    }
    if (isPar(n)) {
        return false;
    }
    for (let i = (n - 1); i > 1; i--) {
        if (isDivisible(n, i)) {
            return false;
        }
    }
    return true;
}
function primos(n) {
    let numerosPrimos = [];

    for (let i = 1; i <= n; i++) {

        if (identificarPrimo(i)) {
            numerosPrimos.push(i);
        }
    }

    return numerosPrimos;
}

console.log(primos(50));