const books = require('./books.js');

function formatedBookNames(arr) {
    return arr.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
}

console.log(formatedBookNames(books));