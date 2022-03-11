const books = require('./books.js');

function authorUnique(arr) {
    arr.sort((a, b) => a.author.birthYear - b.author.birthYear);

    let expectedResult = false;
    
    arr.forEach((book, index) => {
        if(book.author.birthYear === arr[index + 1]?.author.birthYear && book.author.name === arr[index + 1]?.author.name) {
            expectedResult = true;
        }
    });

    return expectedResult;
}

// function authorUnique() {
//     return books.every((book) =>
//       !books.some((bookSome) =>
//         (bookSome.author.birthYear === book.author.birthYear)
//         && (bookSome.author.name !== book.author.name)));
//   }

console.log(authorUnique(books));