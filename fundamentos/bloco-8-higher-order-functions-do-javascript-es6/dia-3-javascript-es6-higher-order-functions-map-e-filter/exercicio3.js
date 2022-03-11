const books = require('./books.js');

function fantasyOrScienceFiction(arr) {
    return arr.filter(book => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
}

console.log(fantasyOrScienceFiction(books));