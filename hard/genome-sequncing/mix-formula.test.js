const mixFormula = require('./mix-formula');

test('input is included in main', () => {
    expect(mixFormula('abcdse', 'cd', 2)).toEqual(['abcdse']);
});

test('input is at start at main at correct length', () => {
    const matchSize = 2;
    const main = 'abcdefgh', newPart = 'zzzab';
    const result  = ['zzzabcdefgh'];

    expect(mixFormula(main, newPart, matchSize)).toEqual(result);
});

test('newPart appends to end, length 1', () => {
    expect(mixFormula('abcdefgh', 'hzzbz', 1)).toEqual(['abcdefghzzbz']);
});

test('start and end with correct length', () => {
    expect(mixFormula('abcdefgh', 'ghwab', 2))
        .toEqual(['ghwabcdefgh', 'abcdefghwab']);
});

test('start and end with incorrect length', () => {
    expect(mixFormula('abcdefgh', 'ghwab', 1))
        .toEqual([]);
});

test('start and end full length', () => {
    expect(mixFormula('abcde', 'qwe', 0))
        .toEqual(['qweabcde', 'abcdeqwe']);
});