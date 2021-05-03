const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = `10
2
1 8`.split('\n');

const n = parseInt(input[0]); // 굴다리의 길이
const m = parseInt(input[1]); // 가로등의 개수
const x = input[2].split(' ').map(el => parseInt(el)); // 가로등 설치 위치

let start = 0;
let end = n;

while (start <= end) {
    let middle = Math.trunc((start + end) / 2);
    let lightArea = 0;

    for (let i = 0; i < m; i++) {
        if (x[i] - lightArea <= middle) {
            lightArea = x[i] + middle;
        } else {
            break;
        }
    }

    if (lightArea >= n) {
        end = middle - 1;
    } else {
        start = middle + 1;
    }
}

console.log(start);