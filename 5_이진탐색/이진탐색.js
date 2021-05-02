const array = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];

function bs(array, find, start, end) {
    if (start > end) {
        return -1;
    }

    let middle = Math.trunc((start + end) / 2);
    console.log(`middle: ${middle}, start: ${start}, end: ${end}, array[middle]: ${array[middle]}`);

    if (array[middle] === find) {
        return middle;
    } else if (array[middle] > find) {
        end = middle - 1;
    } else {
        start = middle + 1;
    }

    return bs(array, find, start, end);
}

console.log(bs(array, 8, 0, array.length - 1));