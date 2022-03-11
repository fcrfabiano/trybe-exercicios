const books = require('./books.js');

function fantasyOrScienceFictionAuthors(arr) {
    const arrByName = arr.filter(book => {
        if (book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
        {
            return book.author.name;
        }
    });

    return arrByName.map(book => book.author.name).sort();
}

console.log(fantasyOrScienceFictionAuthors(books));