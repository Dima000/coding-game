let [width, height] = readline().split(' ').map(n => +n);

let wInputs = readline().split(' ').map(n => +n);
let hInputs = readline().split(' ').map(n => +n);

let count = 0;
let W = [0, ...wInputs, width];
let H = [0, ...hInputs, height];

for (let x = 0; x < W.length - 1; x++)
    for (let x2 = x + 1; x2 < W.length; x2++) {
        let deltaX = W[x2] - W[x];

        for (let y = 0; y < H.length - 1; y++)
            for (let y2 = y + 1; y2 < H.length; y2++) {
                const deltaY = H[y2] - H[y];

                if (deltaX === deltaY) {
                    count += 1;
                }
            }
    }

console.log(count);
