function solution(n) {
    let answer = 0;
    
    answer = parseInt(n.toString(3).split("").reverse().join(""), 3);
    
    return answer;
}