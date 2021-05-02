// const warehouse = [1, 3, 1, 5]; // 답은 8
const warehouse = [1, 3, 1, 5, 2, 8]; // 답은 : 16

let dp = new Array(warehouse.length).fill(0);

// i번째 식량창고는 i-1번째 또는 'i-2번째 + 현재' 중 큰 값

dp[0] = warehouse[0];
dp[1] = Math.max(warehouse[0], warehouse[1]);
for (let i = 2; i < dp.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + warehouse[i]);
}

console.log(dp[dp.length - 1]);