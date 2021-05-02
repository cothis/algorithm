// const warehouse = [1, 3, 1, 5]; // 답은 8
const warehouse = [1, 3, 1, 5, 2, 8]; // 답은 : 16

let total = 0;
let start = 0;

while (start < warehouse.length - 1) {
    if (start + 2 < warehouse.length) {
        let a = warehouse[start] + warehouse[start + 2];
        let b = warehouse[start + 1];
        if (a > b) {
            start = start + 3;
            total += a;
        } else {
            start = start + 2;
            total += b;
        }
    } else {
        total += warehouse[start + 1];
        start = start + 1;
    }
}

console.log(total);
// 정답은 맞게 나오지만 다이나믹 프로그래밍이 아니고 너무 복잡하다.