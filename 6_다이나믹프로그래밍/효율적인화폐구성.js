/*
입력받은 화폐로 목표 금액을 만들 수 있는 최소한의 화폐 개수
불가능하면 -1

예)
화폐금액 19
화폐종류 2 3 5 7
5 * 3 + 2 * 2 => 5장
5 * 2 + 2 * 1 + 7 * 1 => 4장
7 * 2 + 5 * 1 => 3장

화폐금액 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19
장수    1 1 2 1 2 1 2 2 2  3  2

 */
const array = [2, 7];
const m = 9;

let dp = new Array(m + 1).fill(Infinity);
dp[0] = 0;
for (let i = array[0]; i < dp.length; i++) {
    for (let j of array) {
        if (i - j >= 0) {
            dp[i] = Math.min(dp[i], dp[i - j] + 1)
        }
    }
}

console.log(dp);
dp.map((el, idx) => {
    if (idx === 0) {
        process.stdout.write('[ ' + el + ', ');
    } else if (idx === dp.length - 1) {
        process.stdout.write(el + ' ]\n');
    } else {
        process.stdout.write(el + ', ');
    }
});
if (dp[m] === Infinity) {
    console.log(-1);
} else {
    console.log(dp[m]);
}