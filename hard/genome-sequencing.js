// take all strings, and sort descending by length
// start with 1 string
// add next string at start or beginning of this one
// take next string, repeat previous step.
// if final reached store result
// repeat with a different starting string

let N = ['GATTACA', 'AGATTA', 'TACAGA']
let MIN_SOLUTION = Number.MAX_SAFE_INTEGER;

addString('', N);

function addString(current, stringsToAdd) {
    // end exit, when solution was found
    if (stringsToAdd.length === 0) {
        MIN_SOLUTION = Math.min(Number.MAX_SAFE_INTEGER, current.length);
    }

    const newCurrentArray = mixFormula(current, stringsToAdd[0]); // array of solutions

    for (let newCurrent of newCurrentArray) {
        if (newCurrent.length > MIN_SOLUTION) {
            return;
        }

        addString(newCurrent, stringsToAdd.slice(1));
    }
}