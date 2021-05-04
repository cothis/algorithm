const T = 1;
// 1번째 입력예제 : 정답 19
// const n = 3;
// const m = 4;
// const input = '1 3 3 2 2 1 4 1 0 6 4 7';

// 2번째 입력예제 : 정답 16
const n = 4;
const m = 4;
const input = '1 3 1 5 2 2 4 1 5 0 2 3 0 6 1 2';

const inputArr = input.split(' ');
const array = new Array(n);
for (let i = 0; i < array.length ; i++) {
    array[i] = inputArr.slice(i * m, i * m + m).map(el => parseInt(el));
}
console.log(array);

let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
//컬럼 별 로우의 그래프를 만든다 dp[col][row] 형태로.. 그래야 나중에 Max 구하기가 편함

for (let col = 1; col < m + 1; col++) {
    for (let row = 1; row < n + 1; row++) {
        //이전 컬럼 위, 중간, 아래 중에 최대값을 선택하고 그래프의 현재위치와 더한다
        let max = dp[col - 1][row];
        if (row - 1 >= 0) {
            max = Math.max(max, dp[col - 1][row - 1]);
        }
        if (row + 1 < n + 1) {
            max = Math.max(max, dp[col - 1][row + 1]);
        }
        dp[col][row] = max + array[row - 1][col - 1];
    }
}
console.log(dp);
console.log(Math.max(...dp[m]));