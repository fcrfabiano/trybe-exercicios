const books = require('./books.js');

function nameAndAge(arr) {
    const newArr = arr.map((book) => {
        return {
            age: book.releaseYear - book.author.birthYear,
            author: book.author.name
        };
    });

    return newArr.sort((a, b) => a.age - b.age);
}

console.log(nameAndAge(books));