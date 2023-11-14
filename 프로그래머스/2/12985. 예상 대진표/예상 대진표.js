function solution(n, a, b) {
    let answer = 1;

    while (num(a) !== num(b)) {
        answer++;
        a = num(a);
        b = num(b);
    }
    
    function num(x) {
        return x % 2 == 0 ? x / 2 : (x + 1) / 2;
    }
    
    return answer;
}