const a = 15;
const b = 60;
const c = -100;

function checkNumber(a, b, c) {
    if(
    Math.sign(a) === -1 || 
    Math.sign(b) === -1 ||
    Math.sign(c) === -1
    ) {
        return "angulo inválido";
    }

    if ((a + b + c) === 180) {
        return true;
    } else {
        return false;
    }
}

console.log(checkNumber(a, b, c));