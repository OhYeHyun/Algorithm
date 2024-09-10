function solution(n) {
    let answer = 1;
    let [first, second] = [1, 2];
    
    if (n === 1 || n === 2) return answer;
    
    for (let i = 3; i <= n; i++) {
        first %= 1000000007;
        second %= 1000000007;
        
        [first, second] = [second, first + second];
    }
    
    answer = second % 1000000007;
    
    return answer;
}