function sum(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function mod(num1, num2) {
    return num1 % num2;
}

function exp(num1, num2) {
    return num1 ** num2;
}




function calc(operador, num1, num2) {
    switch(operador) {
        case "+":
            console.log(sum(num1, num2));
        break;
        case "-":
            console.log(sub(num1, num2));
        break;
        case "/":
            console.log(div(num1, num2));
        break;
        case "*":
            console.log(mult(num1, num2));
        break;
        case "^":
            console.log(exp(num1, num2));
        break;
        case "%":
            console.log(mod(num1, num2));
        break;
        default:
        break;
    }
}

calc("%", 3, 3);