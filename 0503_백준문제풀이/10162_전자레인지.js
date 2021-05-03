const fs = require('fs');
const input = '630';
// const input = fs.readFileSync('/dev/stdin').toString();
let inputNumber = parseInt(input);

const a = 300;
const b = 60;
const c = 10;

let result = '';
if (input % c !== 0) {
    result = '-1';
} else {
    result += Math.trunc(inputNumber / a) + ' ';
    inputNumber %= a;

    result += Math.trunc(inputNumber / b) + ' ';
    inputNumber %= b;

    result += inputNumber / c;
}

console.log(result);