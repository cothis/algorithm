const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = `6
1 1
1 3
4 2`.split('\n');

const n = parseInt(input[0]);
const students = input.slice(1).map(el => el.split(' '));
console.log(n);
console.log(students);

// 0 000 00