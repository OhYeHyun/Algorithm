function solution(x, y, n) {
    let answer = 0;
    const expressions = [["+", n], ["*", 2], ["*", 3]];
    const xSet = new Set([x]);
    
    let queueIdx = 0;
    const queue = [[x, answer]];
    
    while (queueIdx < queue.length) {
        let [curX, curAnswer] = queue[queueIdx++];
        if (curX === y) return curAnswer;
        
        for (const ex of expressions) {
            const [operator, num] = ex;
            let newX = curX;
            if (operator === "+") newX += num;
            if (operator === "*") newX *= num;

            if (newX <= y && !xSet.has(newX)) {
                xSet.add(newX);
                queue.push([newX, curAnswer + 1]);
            }
        }
    }
    return -1;
}