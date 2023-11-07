function solution(n) {
    let answer = 1;
    
    for (let i = 1; i <= n / 2; i++) {
        let j = Math.floor(Math.sqrt(2 * n + i * (i - 1)));
        (i + j) * (j - i + 1) / 2 == n ? answer++ : -1;
    }
    
    return answer;
}