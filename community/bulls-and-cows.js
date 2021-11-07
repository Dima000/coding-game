const N = parseInt(readline());
const guesses = [];

for (let i = 0; i < N; i++) {
    let inputs = readline().split(' ');
    const guess = inputs[0];
    const bulls = parseInt(inputs[1]);
    const cows = parseInt(inputs[2]);

    guesses.push({
        guess,
        bulls,
        cows
    });
}
guesses.sort((a, b) => a.bulls !== b.bulls ? b.bulls - a.bulls : b.cows - a.cows)
console.error(guesses);


let answer = '';
const data = [];
for (let i = 0; i < 4; i++) {
    data[i] = {
        possible: new Set(),
        notAllowed: new Set(),
    }
}

for (let guess of guesses) {
    if (guess.bulls === 4) {
        answer = guess.guess;
        break;
    }




}


console.log(answer);
