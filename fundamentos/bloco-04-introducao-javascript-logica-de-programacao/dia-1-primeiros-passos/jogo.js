// function accumulator(limit){
//     let accumulator = 0;

//     for (let i = 0; i <= limit; i+=1) {
//         accumulator += i;
//     }

//     return accumulator;
// }

// console.log(accumulator(10));

// module.exports = accumulator;

// function oddNumbers(){
//     let oddNumbers = [];

//     for (let i = 0; i <= 50; i += 1) {
//         if ((i % 2) !== 0) {
//             oddNumbers.push(i);
//         }
//     }

//     return oddNumbers.toString();
// }

// console.log(oddNumbers());
  
// module.exports = oddNumbers;

// const elementos = [
//     "banana",
//     "maça",
//     "figo",
//     "uva",
//     "laranja",
//     "pêssego"
// ];

// function findIndexOf(array, elemento) {
//     let message = "";
//     let encontrado = false;

//     for (let index = 0; index <= array.length; index += 1) {
//         if (array[index] == elemento) {
//             message = array[index];
//             encontrado = true;
//         }
//     }

//     if (encontrado) {
//         return message;
//     }

//     return "Elemento Não encontrado no array.";
// }

// console.log(findIndexOf(elementos, "caqui"));
  
// module.exports = findIndexOf;

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);
}