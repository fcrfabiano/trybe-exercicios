const books = require('./books.js');

function someBookWasReleaseOnThe80s(arr) {
    return arr.some(book => book.releaseYear >= 1980 && book.releaseYear <= 1989);
}

console.log(someBookWasReleaseOnThe80s(books));