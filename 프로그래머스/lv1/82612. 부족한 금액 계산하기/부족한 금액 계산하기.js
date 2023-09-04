function solution(price, money, count) {
    let answer = money * -1;
    
    for (let i = 1; i <= count; i++) {
        answer += price * i;
    }
    
    answer < 0 ? answer = 0 : -1;
    
    return answer;
}