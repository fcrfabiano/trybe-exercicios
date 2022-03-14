const books = require('./data.js');

function reduceNames(arr) {
    return arr.reduce((acc, cur) => {
        const string = acc ? `${acc}, ${cur.author.name}` : `${cur.author.name}`;

        return string;
        //return string;
    }, "") + ".";
}

console.log(reduceNames(books));