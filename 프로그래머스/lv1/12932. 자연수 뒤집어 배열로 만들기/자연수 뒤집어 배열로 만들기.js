function solution(n) {
    let answer = [];
    
    answer = n.toString().split("").reverse().map((e) => +e);
    
    return answer;
}