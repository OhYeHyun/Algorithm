function solution(n) {
    let answer = 0;
    
    for (let i = 2; i <= n; i++) {
        n % i == 1 && answer == 0 ? answer = i : -1;
    }
    
    return answer;
}