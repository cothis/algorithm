const list = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];


function selection(list) {
    for (let i = 0; i < list.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < list.length; j++) {
            if (list[minIndex] > list[j]) {
                minIndex = j;
            }
        }
    
        [list[minIndex], list[i]] = [list[i], list[minIndex]]; // swap 문법 [a, b] = [b, a]
    }
    
    return list;
}

function insertion(list) {
    for (let i = 1; i < list.length; i++) {
        for (let j = i; j > 0; j--) {
            if (list[j] < list[j - 1]) {
                [list[j], list[j - 1]] = [list[j - 1], list[j]]; // swap 문법 [a, b] = [b, a]
            } else {
                break;
            }
        }
    }
    
    return list;
}

function quick(list, start, end) {
    if (start >= end) {
        return; // 원소가 1개인 경우 종료
    }
    const pivot = start; // pivot 은 첫번째 원소
    let left = start + 1;
    let right = end;
    while (left <= right) {
        // pivot 보다 큰 데이터를 찾 을 때까지 반복
        while (left <= end && list[left] <= list[pivot]) {
            left += 1;
        }
        // pivot 보다 작은 데이터를 찾을 때까지 반복
        while (right > start && list[right] >= list[pivot]) {
            right -= 1;
        }
        if (left > right) { // 엇갈렸다면 작은 데이터와 피벗을 교체
            [list[right], list[pivot]] = [list[pivot], list[right]];
        } else { // 엇갈리지 않았다면 작은 데이터와 큰 데이터를 교체
            [list[left], list[right]] = [list[right], list[left]];
        }
    }
    // 분할 이후 왼쪽 부분과 오른쪽 부분에서 각각 정렬 수행
    quick(list, start, right - 1);
    quick(list, right + 1, end);
    
    return list;
}

function countingSort(list) { // 0과 양수로 이루어진 리스트일 때만 가능
    const countArray = new Array(Math.max.apply(null, list) + 1).fill(0);

    for (let el of list) {
        countArray[el] += 1;
    }
    return countArray;
}

// console.log('selection', selection(list));
// console.log('insertion', insertion(list));
// console.log('quick', quick(list, 0, list.length - 1));

const array = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];
let sortedArray = countingSort(array);
let result = '';
for (let i in sortedArray) {
    for (let j = 0; j < sortedArray[i]; j++) {
        result += i + ' '
    }
}
console.log(result);