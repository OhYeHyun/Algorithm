function solution(n) {
    let answer = 0;
    
    for (let i = 1; i <= Math.sqrt(n); i++) {
        n % i == 0 ? (i == Math.sqrt(n) ? answer += i : answer += (i + (n / i))) : -1;
    }
    
    return answer;
}