/*
입력 예시
4 6
19 15 10 17

출력 예시
15
 */

const input = [19, 15, 10, 17];
const h = 6;
let sortedInput = input.sort();

function solution(array, h, start, end) {
    if (start > end) {
        return;
    }

    let mid = Math.trunc((start + end) / 2);
    let result = calcHeight(array, mid);
    if (result === h) {
        canResult.push(mid);
        start += 1;
    } else if (result > h) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }
    solution(array, h, start, end);
}

function calcHeight(array, h) {
    let height = 0;
    console.log(array, h)
    for (let l of array) {
        if (l > h) {
            height += (l - h);
        }
    }
    return height;
}

let canResult = []
solution(sortedInput, h, 0, sortedInput[sortedInput.length - 1], canResult);
console.log(Math.max(...canResult));