function solution(n, left, right) {
    let answer = [];
    
    for (let i = 1; i <= n; i++) {
        if (i < Math.ceil((left + 1) / n)) continue;
        else if (i > Math.ceil((right + 1) / n)) break;
        else {
            let arr = new Array(i);
            for (let j = i; j <= n; j++) {
                if (j == i) {
                    arr.fill(j)
                } else {
                    arr.push(j)
                }
            }
            answer.push(arr);
        }
    }
    
    answer = answer.flat().splice(left % n, right - left + 1);
    
    return answer;
}