function solution(queue1, queue2) {
    let score = 0;
    const total = queue1.length * 3 - 1;
    
    for (let i = 0; i < queue1.length; i++) {
        score += (queue1[i] + queue2[i]);
    }
    if (score % 2 === 1) return -1;
    score /= 2;
    
    let enCount = 0;
    let deCount = 0;
    let sumQ1 = queue1.reduce((acc, cur) => acc + cur, 0);
    
    while (enCount + deCount < total) {
        if (sumQ1 > score) {
            const value = queue1[deCount++];
            queue2.push(value);
            sumQ1 -= value;
        } else if (sumQ1 < score) {
            const value = queue2[enCount++];
            queue1.push(value);
            sumQ1 += value;
        } else {
            // sumQ1 === score
            const sumQ2 = queue2.reduce((acc, cur, curIdx) => {
                if (curIdx >= enCount) return acc + cur
                return acc;
            }, 0);
            
            return sumQ2 === score ? enCount + deCount : -1;
        }
    }
    
    return -1;
}