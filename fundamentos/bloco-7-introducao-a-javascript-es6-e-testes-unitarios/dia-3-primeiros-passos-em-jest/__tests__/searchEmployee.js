const searchEmployee = require('../searchEmployee.js');

describe("Testa a função searchEmployee", () => {
    test("Testa se a função searchEmployee está definida", () => {
        expect(searchEmployee).toBeDefined();
    });

    test("Testa se searchEmployee é uma função", () => {
        expect(typeof searchEmployee).toBe('function');
    });

    test("Testa se o id existe", () => {
        expect(() => { searchEmployee("4", "firstName"); }).toThrow(new Error("ID não identificada"));
    });

    test("Testa se a chave existe", () => {
        expect(() => { searchEmployee("1256-4", "nome"); }).toThrow(new Error("Informação indisponível"));
    });

    test("Testa se retorna o valor correto", () => {
        expect(searchEmployee("1256-4", "firstName")).toMatch(/Linda/);
    });
});