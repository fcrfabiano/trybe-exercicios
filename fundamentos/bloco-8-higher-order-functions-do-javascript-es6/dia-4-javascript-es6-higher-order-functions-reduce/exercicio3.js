const books = require('./data.js');

const age = (releaseYear, birthYear) => releaseYear - birthYear;
const average = (total, count) => total / count;

function averageAge(arr) {
    return average(arr.reduce((acc, cur) => {
        acc += age(cur.releaseYear, cur.author.birthYear);

        return acc;
    }, 0), arr.length);
}

//console.log(age(1928, 1890));
console.log(averageAge(books));