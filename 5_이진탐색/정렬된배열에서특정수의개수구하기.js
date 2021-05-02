const m = 4;
const array = [1, 1, 2, 2, 2, 2, 3];

function bs_left(array, target, start, end) {
    let result = -1;
    while (start <= end) {
        let mid = Math.trunc((start + end) / 2);
        if (target === array[mid]) {
            result = mid;
            end = mid - 1; // 왼쪽으로 계속 찾기 위해
        } else if (target > array[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    if (result >= 0) {
        result -= 1; // 결과가 있다면 왼쪽으로 한 칸 이동
    }
    return result;
}

function bs_right(array, target, start, end) {
    let result = -1;
    while (start <= end) {
        let mid = Math.trunc((start + end) / 2);
        if (target === array[mid]) {
            result = mid;
            start = mid + 1; // 오른쪽으로 계속 찾기 위해
        } else if (target > array[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    if (result >= 0) {
        result += 1; // 결과가 있다면 오른쪽으로 한 칸 이동
    }
    return result;
}

console.log(bs_left(array, m, 0, array.length - 1));
console.log(bs_right(array, m, 0, array.length - 1));

let answer = bs_right(array, m, 0, array.length - 1) - bs_left(array, m, 0, array.length - 1);
console.log('정답 :', answer);