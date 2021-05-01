// 최대 K 번의 바꿔치기 연산을 수행하여 만들 수 있는 배열 A의 모든 원소의 합의 최대값을 출력

const a = [1, 2, 5, 4, 3];
const b = [5, 5, 6, 6, 5];
const k = 3;

a.sort();
b.sort().reverse();

let sum = 0;
for (let i = 0; i < a.length; i++) {
    if (i < k) {
        sum += b[i];
    } else {
        sum += a[i];
    }
}

console.log(sum);
console.log(a);
console.log(b);
