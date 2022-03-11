const books = require('./books.js');

function booksOrderedByReleaseYearDesc(arr) {
    return arr.sort((a, b) => b.releaseYear - a.releaseYear);
}

console.log(booksOrderedByReleaseYearDesc(books));