function solution(d, budget) {
    let answer = 0, sum = 0;
    d.sort((a, b) => a - b);
    
    d.forEach((e, idx) => {
        sum += e;
        sum <= budget ? answer = idx + 1 : -1;
    })
    
    return answer;
}