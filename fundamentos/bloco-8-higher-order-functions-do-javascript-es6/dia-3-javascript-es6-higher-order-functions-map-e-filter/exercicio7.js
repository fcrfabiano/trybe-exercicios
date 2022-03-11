const books = require('./books.js');

function authorWith3DotsOnName(arr) {
    return arr.find(book => (
        book.author.name.split(' ').filter(word => word.endsWith('.')).length === 3
    ));
}

console.log(authorWith3DotsOnName(books));