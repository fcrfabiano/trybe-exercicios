const num = 0;

function checkNumber(num) {
    if (Math.sign(num) === -1) {
        return 'negative;'
    }

    if (Math.sign(num) === 1) {
        return 'positive';
    } else {
        return 'zero';
    }
}

console.log(checkNumber(num));