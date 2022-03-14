const books = require('./data.js');

function longestNamedBook(arr) {
    return arr.reduce((acc, cur) => cur.name.length > acc.name.length ? cur : acc);
}

console.log(longestNamedBook(books));