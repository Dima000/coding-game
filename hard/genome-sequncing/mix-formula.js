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

module.exports = mixFormula;