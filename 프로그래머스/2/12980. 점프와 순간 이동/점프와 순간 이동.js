function solution(n) {
    let ans = 1;
    
    while (n !== 1) {
        n % 2 == 1 ? (n -= 1, ans++) : n;
        n /= 2;
    }
    
    return ans;
}