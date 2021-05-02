const fs = require('fs');
const input = process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().split('\n') :
`5 2
4
1
5
3
3`.split('\n');

const n = parseInt(input[0].split(' ')[0]);
const m = parseInt(input[0].split(' ')[1]);
const j = parseInt(input[1]);
const array = input.slice(2, 2 + j).map(el => parseInt(el));

let distance = 0;
let pos = 1;
for (let p of array) {
    // 떨어지는 위치 p
    // 현재위치 pos ~ pos + m - 1
    // 떨어지는 위치가 pos ~ pos + m - 1 이내라면 이동안함
    if (p >= pos && p <= pos + m - 1) {
        continue;
    }

    // 떨어지는 위치가 pos ~ pos + m - 1 보다 작으면 pos 를 p까지 차이만큼 이동
    if (p < pos) {
        distance += pos - p;
        pos = p;
    }

    // 떨어지는 위치가 pos ~ pos + m - 1 보다 크면 pos + m - 1 을 p까지 이동
    if (p > pos + m - 1) {
        distance += p - (pos + m - 1);
        pos = p - m + 1;
    }
}
console.log(distance);