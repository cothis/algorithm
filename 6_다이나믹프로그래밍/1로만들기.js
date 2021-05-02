/*
입력 26
출력 3
5로 나누어 떨어지면 나누기
3으로 나누어 떨어지면 나누기
2로 나누어 떨어지면 나누기
1 빼기

최소 연산횟수 계산

37이라면
37 -> 36 -> 35 -> 7 -> 6 -> 2 -> 1 (6번)
37 -> 36 -> 12 -> 4 -> 2 -> 1 (5번)
37 -> 36 -> 18 -> 6 -> 2 -> 1 (5번)
37 -> 36 -> 18 -> 9 -> 3 -> 1 (5번)

1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37
1 2 2 3 2 3 4 4 3 3  4
dp[Math.trunc(i/5)], dp[Math.trunc(i/3)], dp[Math.trunc(i/2), dp[i - 1]] 중 최소값 + 1
 */

let n = 60; // 60 -> 12 -> 4 -> 2 -> 1

let dp = new Array(n + 1).fill(0);
for(let i = 2; i < dp.length; i++) {
    let min = dp[i - 1];
    if (i % 5 === 0) {
        min = Math.min(min, dp[i / 5]);
    }
    if (i % 3 === 0) {
        min = Math.min(min, dp[i / 3]);
    }
    if (i % 2 === 0) {
        min = Math.min(min, dp[i / 2]);
    }
    dp[i] = min + 1;
}

console.log(dp);
console.log(dp[n]);