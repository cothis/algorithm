const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = `6 6
..S...
..S.W.
.S....
..W...
...W..
......`.split('\n');

const row = parseInt(input[0].split(' ')[0]);
const col = parseInt(input[0].split(' ')[1]);
const graph = input.slice(1, 1 + row).map(el => el.split(''));
const visited = new Array(row).fill(0);
for (let i in visited) {
    visited[i] = new Array(col).fill(0);
}

function bfs(graph, x, y) {
    let queue = [];
    if (graph[x][y] === 'W') {
        queue.push([null, [x, y]]);

        while (queue.length > 0) {
            let data = queue.shift();
            let nx = data[1][0];
            let ny = data[1][1];
            if (nx < 0 || ny < 0 || nx >= row || ny >= col) continue;
            if (graph[nx][ny] === 'D') continue;
            if (graph[nx][ny] === 'S') {
                if (graph[data[0][0]][data[0][1]] === 'W') return false;
                graph[data[0][0]][data[0][1]] = 'D';
                continue;
            }
            if (visited[nx][ny] === 0) {
                visited[nx][ny] = 1;
                queue.push([data[1], [nx - 1, ny]]);
                queue.push([data[1], [nx + 1, ny]]);
                queue.push([data[1], [nx, ny - 1]]);
                queue.push([data[1], [nx, ny + 1]]);

            }
        }
    }
    return true;
}

let result = true;
for (let x = 0; x < row; x++) {
    for (let y = 0; y < col; y++) {
        if (!bfs(graph, x, y)) {
            result = false;
            console.log(0);
        }
    }
}

if (result) {
    console.log(1);
    for (let row of graph) {
        console.log(row.join(''));
    }
}
