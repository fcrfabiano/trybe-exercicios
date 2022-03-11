const books = require('./books.js');

function oldBooksOrdered(arr) {
    const sortByAge = arr.filter((book) => (2022 - book.releaseYear) > 60);
    return sortByAge.sort((a, b) => a.releaseYear - b.releaseYear);
}

console.log(oldBooksOrdered(books));