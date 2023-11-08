function solution(n) {
    let answer = 0;
    let pre = 0, cur = 1;
    
    for (let cnt = 2; cnt <= n; cnt++) {
        let tmp = pre + cur;
        pre = cur;
        cur = tmp;
        cur = cur % 1234567;
    }
    
    answer = cur;
    
    return answer;
}