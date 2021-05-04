const array = [15, 11, 4, 8, 5, 2, 4];
array.reverse();

const dp = new Array(array.length).fill(1);

for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < i; j++) {
        if (array[j] < array[i]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

console.log(array.length - Math.max(...dp));
