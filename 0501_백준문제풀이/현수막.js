// bfs 풀기
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const rowCol = input[0].split(' ');
const row = parseInt(rowCol[0]);
const col = parseInt(rowCol[1]);

let graph = input.slice(1, row + 1);
for (let r in graph) {
    let col = graph[r].split(' ');
    for(let c in col) {
        col[c] = parseInt(col[c]);
    }
    graph[r] = col;
}

let count = 0;
for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
        if (bfs(graph, r, c)) {
            count += 1;
        }
    }
}
console.log(count);

function bfs(graph, r, c) {
    let queue = [[r, c]];

    let result = false;

    while (queue.length > 0) {
        let v = queue.shift();
        let nr = v[0];
        let nc = v[1];
        if (nr >= 0 && nc >= 0 && nr < row && nc < col) {
            let isOne = graph[nr][nc] === 1;
            result |= isOne;
            graph[nr][nc] = 0;

            if (isOne) {
                queue.push([nr - 1, nc - 1]);
                queue.push([nr - 1, nc]);
                queue.push([nr - 1, nc + 1]);
                queue.push([nr, nc - 1]);
                queue.push([nr, nc + 1]);
                queue.push([nr + 1, nc - 1]);
                queue.push([nr + 1, nc]);
                queue.push([nr + 1, nc + 1]);
            }
        }
    }

    return result;
}