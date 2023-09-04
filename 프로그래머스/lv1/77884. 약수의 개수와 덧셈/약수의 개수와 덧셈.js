function solution(left, right) {
    let answer = 0;
    
    for (let n = left; n <= right; n++) {
        let count = 0;
        for (let i = 1; i <= Math.sqrt(n); i++) {
            n % i == 0 ? (i == Math.sqrt(n) ? count += 1 : count += 2) : -1;
        }
        count % 2 == 0 ? answer += n : answer -= n;
    }
    
    return answer;
}