/*
입력 예시
4 6
19 15 10 17

출력 예시
15
 */

const input = [19, 15, 10, 17];
const h = 6;

let start = 0;
let end = Math.max(...input);

// 이진 탐색 수행
let result = 0;
while (start <= end) {
    let total = 0;
    let mid = Math.trunc((start + end) / 2);
    for (let x of input) {
        // 잘랐을 때 떡의 양 계산
        if (x > mid) {
            total += x - mid;
        }
    }
    // 떡의 양이 부족한 경우 더 많이 자르기(왼쪽 부분 탐색)
    if (total < h) {
        end = mid - 1
    } else { // 떡의 양이 충분한 경우 덜 자르기(오른쪽 부분 탐색)
        result = mid;
        start = mid + 1;
    }
}

console.log(result);