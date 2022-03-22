// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("../exercicios/exercicio8.js");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
      const expected = new Error('Não temos esse pokémon para você :(');

      function callback(error, result) {
        expect(error).toEqual(expected);
        done();
      }

      getPokemonDetails(pokemon => pokemon.name === 'test', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const actual = 'Squirtle';
    const expected = 'Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun';

    function callback(error, result) {
        expect(result).toBe(expected);
        done();
    }

    getPokemonDetails(pokemon => pokemon.name === actual, callback);
  });
});