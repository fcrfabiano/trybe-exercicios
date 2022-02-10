// let p1 = "papel";
// let p2 = "tesoura";

// function check(p1, p2) {
//     if (p1 === "pedra" && p2 === "papel" || p2 === "pedra" && p1 === "papel")
//         return "papel";
//     if (p1 === "pedra" && p2 === "tesoura" || p2 === "pedra" && p1 === "tesoura")
//         return "pedra";
//     if (p1 === "papel" && p2 === "tesoura" || p2 === "papel" && p1 === "tesoura")
//         return "tesoura";
//     return "Ties A";
// }

// console.log(check(p1, p2));

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i+1] !== undefined) {
        newArray.push(numbers[i] * numbers[i+1])
    } else {
        newArray.push(numbers[i] * 2)
    }
}

console.log(newArray);