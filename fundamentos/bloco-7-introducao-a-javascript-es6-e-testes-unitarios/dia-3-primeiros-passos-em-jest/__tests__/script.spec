const sum = require('./script.test');

test('Soma de dois números', () => {
    expect(sum(2, 3)).toEqual(5);
});