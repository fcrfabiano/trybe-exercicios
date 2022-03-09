const { encode, decode } = require('../encodeDecode.js');

describe("Testa a função encode", () => {
    test("Testa se encode é uma função", () => {
        expect(typeof encode).toBe('function');
    });

    test("Testa se as vogais a, e, i, o e u são convertidos nos respectivos números 1, 2, 3, 4 e 5", () => {
        expect(encode('aeiou')).toMatch(/12345/);
    });

    test("Testa se as demais letras não são convertidas em números", () => {
        expect(encode('abcdefghijklmnopqrstuwyxz')).toMatch(/1bcd2fgh3jklmn4pqrst5wyxz/);
    });

    test("Testa se a string que é retornada pela função têm o mesmo número de caracteres que a string passada como parâmetro", () => {
        expect(encode('fabiano cesar da rosa').length).toBe(21);
    });
});

describe("Testa a função decode", () => {
    test("Testa se decode é uma função", () => {
        expect(typeof decode).toBe('function');
    });

    test("Testa se os números 1, 2, 3, 4 e 5 são convertidos nas respectivas vogais a, e, i, o e u", () => {
        expect(decode('12345')).toMatch(/aeiou/);
    });

    test("Testa se os demais números não são convertidos para letras", () => {
        expect(decode('1bcd2fgh3jklmn4pqrst5wyxz')).toMatch(/abcdefghijklmnopqrstuwyxz/);
    });

    test("Testa se a string que é retornada pela função têm o mesmo número de caracteres que a string passada como parâmetro", () => {
        expect(encode('f1b31n4 c2s1r d1 r4s1').length).toBe(21);
    });
});