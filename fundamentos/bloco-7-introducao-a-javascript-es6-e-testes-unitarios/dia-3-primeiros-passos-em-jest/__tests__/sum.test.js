function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
}

describe("Testa a função sum que retorna a soma de dois números", () => {
    test("Teste se o retorno de sum(4, 5) é 9", () => {
        expect(sum(4, 5)).toBe(9);
    });
});