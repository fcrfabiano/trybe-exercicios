function bigger(num1, num2) {
    if (num1 > num2) {
        return num1;
    }

    if (num2 > num1) {
        return num2;
    }
}

console.log(bigger(30, -50));