const myFizzBuzz = require('../myFizzBuzz.js');

describe("Testa a função myFizzBuzz", () => {
    test("Testa se 15 retorna 'fizzbuzz'", () => {
        expect(myFizzBuzz(15)).toMatch(/fizzbuzz/);
    });

    test("Testa se 3 retorna 'fizz'", () => {
        expect(myFizzBuzz(3)).toMatch(/fizz/);
    });

    test("Testa se 5 retorna 'buzz'", () => {
        expect(myFizzBuzz(5)).toMatch(/buzz/);
    });

    test("Testa se 17 retorna 17", () => {
        expect(myFizzBuzz(17)).toBe(17);
    });

    test("Testa se 'a' retorna false", () => {
        expect(myFizzBuzz('a')).toBeFalsy();
    });
});