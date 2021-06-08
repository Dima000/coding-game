function mixFormula(main, input, commonLength) {
    const lengthI = input.length;
    let values = [];

    if (lengthI === commonLength) {
        if (main.includes(input)) {
            values.push(main);
        }
        return values;
    }

    if (commonLength === 0) {
        return [input + main, main + input];
    }

    const startI = input.substring(0, commonLength);
    const endI = input.substring(lengthI - commonLength);
    const startM = main.substring(0, commonLength);
    const endM = main.substring(main.length - commonLength);

    if (endI === startM) {
        const inputDiff = input.substring(0, lengthI - commonLength);
        const mainDiff = main.substring(commonLength);
        values.push(inputDiff + mainDiff);
    }

    if (endM === startI) {
        const mainDiff = main.substring(0, main.length - commonLength);
        const inputDiff = input.substring(commonLength);
        values.push(mainDiff + inputDiff);
    }

    return values;
}

module.exports = mixFormula;