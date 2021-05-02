const fs = require('fs');
const input = process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().split('\n') :
    `1001100`.split('\n');

const str = input[0];

let zeros = 0;
let ones = 0;

for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i] !== str[i - 1]) {
        if (str[i] === '0') {
            zeros += 1;
        } else {
            ones += 1;
        }
    }
}
console.log(Math.min(zeros, ones));