function solution(x, n) {
    let answer = [], sum = x;
    for(let i = 0; i < n; i++) {
        answer.push(sum)
        sum += x;
    }
    
    return answer;
}