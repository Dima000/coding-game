const mixFormula = require('./mix-formula');

test('input is included in main', () => {
    expect(mixFormula('abcdse', 'cd', 2)).toStrictEqual(['abcdse']);
});

test('input is at start at main at correct length', () => {
    expect(mixFormula('abcdefgh', 'zzzab', 2)).toStrictEqual(['zzzabcdefgh']);
});

test('input is at start at main but invalid length', () => {
    expect(mixFormula('abcdefgh', 'zzzab', 1)).toStrictEqual(['zzzabcdefgh']);
});

test('start and end with correct length', () => {
    expect(mixFormula('abcdefgh', 'ghwab', 2))
        .toStrictEqual(['ghwabcdefgh', 'abcdefghwab']);
});

test('start and end with incorrect length', () => {
    expect(mixFormula('abcdefgh', 'ghwab', 1))
        .toStrictEqual([]);
});

test('start and end full length', () => {
    expect(mixFormula('abcde', 'qwe', 0))
        .toStrictEqual(['qweabcde', 'abcdeqwe']);
});