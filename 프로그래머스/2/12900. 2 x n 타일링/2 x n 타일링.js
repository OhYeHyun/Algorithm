function solution(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    let [first, second] = [1, 2];
    
    for (let i = 3; i <= n; i++) {
        [first, second] = [second, (first + second) % 1000000007];
    }
        
    return second;
}