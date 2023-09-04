function solution(left, right) {
    let answer = 0;
    
    for (let n = left; n <= right; n++) {
        Number.isInteger(Math.sqrt(n)) ? answer -= n : answer += n;
    }
    
    return answer;
}