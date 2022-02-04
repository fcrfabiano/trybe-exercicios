let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let biggerNum = 0;

for (let i = 0; i <= numbers.length; i+=1) {
    for (let j = 0; j <= numbers.length; j++) {
        if (numbers[j] > numbers[i]) {
            if(biggerNum < numbers[j]) {
                biggerNum = numbers[j];
            }
        }
    }
}

console.log(biggerNum);