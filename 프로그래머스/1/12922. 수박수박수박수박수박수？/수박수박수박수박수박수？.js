function solution(n) {
    let answer = '';
    for (let i = 0; i < n; i++) {
        let str = i % 2 == 0 ? "수" : "박";
        answer += str;
    }
    
    return answer;
}