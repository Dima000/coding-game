// take all strings, and sort descending by length
// start with 1 string
// add next string at start or beginning of this one
// take next string, repeat previous step.
// if final reached store result
// repeat with a different starting string
const mixFormula = require('./mix-formula');

let MIN_SOLUTION = Number.MAX_SAFE_INTEGER;

function addString(current, partsToAdd) {
    // exit when solution was found
    if (partsToAdd.length === 0) {
        MIN_SOLUTION = Math.min(MIN_SOLUTION, current.length);
        return;
    }

    const [newPart, ...leftPartsToAdd] = partsToAdd;

    for (let i = newPart.length; i >= 0; i -= 1) {
        const newCurrentArray = mixFormula(current, newPart, i);
        // if (newCurrentArray.length) {
        //     console.log('Current', current);
        //     console.log('New part', newPart);
        //     console.log('Rest left', leftPartsToAdd.join(' '));
        //     console.log('New Current', newCurrentArray);
        //     console.log('------------------------');
        // }
        newCurrentArray.forEach(newCurrent => addString(newCurrent, leftPartsToAdd));
    }
}

function genomeSequencing(input) {
    MIN_SOLUTION = Number.MAX_SAFE_INTEGER;
    const input2 = [...input].sort((a, b) => b.length - a.length);

    addString('', input2);

    console.log(MIN_SOLUTION);
    return MIN_SOLUTION;
}

module.exports = genomeSequencing;