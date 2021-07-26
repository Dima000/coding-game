const genomeSequencing = require('./genome-sequencing');

test('example 1', () => {
    const input = ['AAC', 'CCTT'];
    const result = 6;

    expect(genomeSequencing(input)).toEqual(result);
});

test('example 2', () => {
    const input = ['AGATTA', 'GATTACA', 'TACAGA'];
    const result = 10;

    expect(genomeSequencing(input)).toEqual(result);
});

test('example 3', () => {
    const input = ['TT', 'AA', 'ACT'];
    const result = 5;

    expect(genomeSequencing(input)).toEqual(result);
});