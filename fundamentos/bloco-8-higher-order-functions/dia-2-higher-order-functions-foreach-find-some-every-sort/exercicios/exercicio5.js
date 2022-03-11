const books = require('./books.js');

function everyoneWasBornOnSecXX(arr) {
    return arr.every(book => book.author.birthYear >= 1901 && book.author.birthYear <= 2000);
}

console.log(everyoneWasBornOnSecXX(books));