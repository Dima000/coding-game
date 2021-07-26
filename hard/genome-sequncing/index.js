const N = parseInt(readline());
const INPUT = [];
let MIN_SOLUTION = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < N; i++) {
    INPUT.push(readline());
}

MIN_SOLUTION = Number.MAX_SAFE_INTEGER;
const input2 = [...INPUT].sort((a, b) => b.length - a.length);
addString('', input2);

console.log(MIN_SOLUTION);


function mixFormula(mainBody, newPart, matchSize) {
    // when expected match size is the same as newPart
    if (newPart.length === matchSize) {
        if (mainBody.includes(newPart)) {
            return [mainBody];
        }
    }

    if (matchSize === 0) {
        const values = [newPart + mainBody, mainBody + newPart];
        if (values[0] === values[1]) {
            values.pop();
        }
        return values;
    }

    let prefixMatches = true;
    let i = 0;
    while (prefixMatches && i < matchSize) {
        const newFragment = newPart[newPart.length - 1 - i];
        const mainFragment = mainBody[matchSize - 1 - i];
        prefixMatches = prefixMatches && newFragment === mainFragment;
        i += 1;
    }

    let suffixMatches = true;
    let k = 0;
    while (suffixMatches && k < matchSize) {
        const newFragment = newPart[k];
        const mainFragment = mainBody[mainBody.length - matchSize + k];
        suffixMatches = suffixMatches && newFragment === mainFragment;
        k += 1;
    }

    const values = [];

    if (prefixMatches) {
        const newPartPrefix = newPart.substring(0, newPart.length - matchSize);
        values.push(newPartPrefix + mainBody);
    }

    if (suffixMatches) {
        const newPartSuffix = newPart.substring(matchSize);
        values.push(mainBody + newPartSuffix);
    }

    if (values.length === 2) {
        debugger;
    }

    return values;
}

function addString(current, partsToAdd) {
    // exit when solution was found
    if (partsToAdd.length === 0) {
        MIN_SOLUTION = Math.min(MIN_SOLUTION, current.length);
        return;
    }

    const [newPart, ...leftPartsToAdd] = partsToAdd;

    for (let i = newPart.length; i >= 0; i -= 1) {
        const newCurrentArray = mixFormula(current, newPart, i);
        newCurrentArray.forEach(newCurrent => addString(newCurrent, leftPartsToAdd));
    }
}
