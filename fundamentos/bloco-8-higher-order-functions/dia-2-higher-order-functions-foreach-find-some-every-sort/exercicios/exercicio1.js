const books = require('./books.js');
  
const authorBornIn1947 = (arr) => arr.find((book) => book.author.birthYear === 1947);

console.log(authorBornIn1947(books));