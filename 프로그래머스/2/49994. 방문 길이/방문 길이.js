function solution(dirs) {
    let answer = 0;
    let route = new Set();
    let xy = [0, 0];
    const dir = { "U": [0, 1], "D": [0, -1], "L": [-1, 0], "R": [1, 0] };

    for (let i = 0; i < dirs.length; i++) {
        const temp = xy.map((e, idx) => e + dir[dirs[i]][idx]);
        if (-5 <= temp[0] && temp[0] <= 5 && -5 <= temp[1] && temp[1] <= 5) {
            const path1 = `${xy[0]},${xy[1]}-${temp[0]},${temp[1]}`;
            const path2 = `${temp[0]},${temp[1]}-${xy[0]},${xy[1]}`;
            
            if (!route.has(path1) && !route.has(path2)) {
                route.add(path1);
                route.add(path2);
                answer++;
            }

            xy = temp;
        }
    }
    return answer;
}