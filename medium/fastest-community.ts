const N: number = +readline();
const lines: string[] = [];
for (let i = 0; i < N; i++) {
    lines.push(readline());
}

lines.sort((a, b) => {
    const A = a.split(':').map(n => +n);
    const B = b.split(':').map(n => +n);

    if (A[0] !== B[0]) {
        return A[0] - B[0];
    }

    if (A[1] !== B[1]) {
        return A[1] - B[1];
    }

    return A[2] - B[2];
})

console.log(lines[0]);
