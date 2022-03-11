const books = require('./books.js');

function smallerName(arr) {
    let nameBook;

    arr.forEach(book => {
        if (!nameBook) {
         nameBook = book.name;
         return;
        };
        if(book.name.length <= nameBook.length) {
            nameBook = book.name
        }
    });

    return nameBook;
};

console.log(smallerName(books));