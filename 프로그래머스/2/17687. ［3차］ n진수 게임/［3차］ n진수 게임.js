function solution(n, t, m, p) {
    let answer = '';
    let strNum = '';
    let num = 0;
    
    while (strNum.length <= t * m) {
        strNum += (num++).toString(n).toUpperCase();
    }
    
    answer = strNum.split('').filter((_, i) => i % m == (p - 1))
        .slice(0, t).join('');
    
    return answer;
}