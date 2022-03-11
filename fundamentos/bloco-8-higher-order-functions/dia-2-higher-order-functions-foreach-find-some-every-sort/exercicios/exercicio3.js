const books = require('./books.js');

function getNamedBook(arr) {
    return arr.find((book) => book.name.length === 26);
}

console.log(getNamedBook(books));