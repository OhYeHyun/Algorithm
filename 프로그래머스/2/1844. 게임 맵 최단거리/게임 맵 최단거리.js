function solution(maps) {
    const goalY = maps.length - 1;
    const goalX = maps[0].length - 1;
    const dir = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let queue = [[0, 0, 1]];
    
    while (queue.length > 0) {
        let [curY, curX, count] = queue.shift();
        
        if (curY == goalY && curX == goalX) return count;
        
        for (let [dirY, dirX] of dir) {
            let newY = curY + dirY;
            let newX = curX + dirX;  
            
            if (newX >= 0 && newX <= goalX && newY >= 0 && newY <= goalY && maps[newY][newX]) {
                maps[curY][curX] = 0;
                queue.push([newY, newX, count + 1]);
            }
        }
    }
    return -1;
}