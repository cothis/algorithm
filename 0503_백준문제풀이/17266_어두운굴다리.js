const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = `10
2
1 8`.split('\n');

const n = parseInt(input[0]); // 굴다리의 길이
const m = parseInt(input[1]); // 가로등의 개수
const x = input[2].split(' ').map(el => parseInt(el)); // 가로등 설치 위치

let max = Math.max(x[0], n - x[m - 1]); // 시작값

for (let i = 1; i < m; i++) {
    max = Math.max(max, Math.ceil((x[i] - x[i - 1]) / 2));
}

console.log(max);