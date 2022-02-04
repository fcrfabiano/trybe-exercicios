let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let lowerNumber = null;

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] < numbers[i]) {
            if (lowerNumber === null) {
                lowerNumber = numbers[j];
            }
            if (lowerNumber > numbers[j]) {
                lowerNumber = numbers[j];
            }
        }     
    }
}

console.log(lowerNumber);