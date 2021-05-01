const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

for (let i = 0; i < input.length; i++) {
    if (input[i] === '0 0') return;

    const wh = input[i].split(' ');
    const w = parseInt(wh[0]);
    const h = parseInt(wh[1]);
    let map = input.slice(i + 1, i + h + 1)
    for (let r in map) {
        map[r] = map[r].split(' ');
    }
    i += h;

    let result = 0;
    for (let r = 0; r < h; r++) {
        for (let c = 0; c < w; c++) {
            if (dfs(map, {x: c, y: r})) {
                result += 1;
            }
        }
    }
    console.log(result);

}

function dfs(map, v) {
    if (v.x < 0 || v.y < 0 || v.x >= map[0].length || v.y >= map.length) {
        return false;
    }

    if (parseInt(map[v.y][v.x]) === 1) {
        map[v.y][v.x] = 0;

        dfs(map, {x : v.x - 1, y: v.y}); // 9시
        dfs(map, {x : v.x - 1, y: v.y - 1}); // 10시 반
        dfs(map, {x : v.x, y: v.y - 1}); // 12시
        dfs(map, {x : v.x + 1, y: v.y - 1}); // 1시 반
        dfs(map, {x : v.x + 1, y: v.y}); // 3시
        dfs(map, {x : v.x + 1, y: v.y + 1}); // 4시 반
        dfs(map, {x : v.x, y: v.y + 1}); // 6시
        dfs(map, {x : v.x - 1, y: v.y + 1}); // 7시 반
        return true;
    }

    return false;
}