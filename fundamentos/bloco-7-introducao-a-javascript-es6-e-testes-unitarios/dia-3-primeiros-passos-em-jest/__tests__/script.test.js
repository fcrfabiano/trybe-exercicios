function sum(a, b) {
    return a + b;
}

test('Soma de dois números', () => {
    expect(sum(2, 3)).toEqual(5);
});

module.exports = sum;