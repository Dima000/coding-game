// const fs = require('fs');
// let readIndex = 0;
// let DATA = fs.readFileSync('./input.txt', 'utf8').split('\r\n');
// const readline = (): string => {
//     const s = DATA[readIndex];
//     readIndex += 1;
//     return s;
// }

type Operation = 'VALUE' | 'MULT' | 'ADD' | 'SUB';
type Argument = {
    ref: boolean;
    value: number | null;
}
type Rule = {
    operation: Operation;
    arg1: Argument;
    arg2: Argument;
}

//@ts-ignore
const N1: number = +readline();
const rules: Rule[] = [];
for (let i = 0; i < N1; i++) {
    //@ts-ignore
    const inputs: string[] = readline().split(' ');
    const operation = inputs[0] as Operation;
    const arg1: string = inputs[1];
    const arg2: string = inputs[2];

    rules.push({
        operation,
        arg1: getArgument(arg1),
        arg2: getArgument(arg2),
    })
}

function getArgument(arg: string): Argument {
    const ref = arg.includes('$');
    const match = arg.match(/-?\d+/);
    return {
        ref,
        value: match ? +match[0] : null,
    }
}

// START Algorithm
const resultMap = new Map<number, number>();

function getCellValue(cellIndex: number): number {
    if (resultMap.has(cellIndex)) {
        return resultMap.get(cellIndex);
    }

    const { operation, arg1, arg2 } = rules[cellIndex];
    const val1 = arg1.ref ? getCellValue(arg1.value) : arg1.value;
    const val2 = arg2.ref ? getCellValue(arg2.value) : arg2.value;
    let value;

    if (operation === 'VALUE') {
        value = val1;
    }
    if (operation === 'ADD') {
        value = val1 + val2;
    }
    if (operation === 'MULT') {
        value = val1 * val2;
    }
    if (operation === 'SUB') {
        value = val1 - val2;
    }

    resultMap.set(cellIndex, value);
    return value;
}

const values = [];
for (let cellIndex = 0; cellIndex < N1; cellIndex += 1) {
    const cellValue = getCellValue(cellIndex);
    resultMap.set(cellIndex, cellValue);
    values.push(cellValue);
}

console.log(values.join('\n'));

