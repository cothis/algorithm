// 단순 피보나치 : 지수 시간 복잡도(비효율적 O(2^N))
function fibo(x) {
    if (x === 1 || x === 2) {
        return 1;
    }
    return (fibo(x - 1) + fibo(x - 2));
}

// 탑다운(메모이제이션)
let dp = new Array(100).fill(0);
function dynaFibo(x) {
    if (x === 1 || x === 2) {
        return 1n;
    }
    if (dp[x] !== 0) {
        return dp[x];
    } else {
        dp[x] = dynaFibo(x - 1) + dynaFibo(x - 2);
        return dp[x];
    }
}

console.log(dynaFibo(99));


// 보텀업
dp = new Array(100).fill(0);
dp[1] = 1n;
dp[2] = 1n;
let n = 99;

for (let i = 3; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(dp[n]);