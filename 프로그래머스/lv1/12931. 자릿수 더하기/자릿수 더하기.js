function solution(n) {
    let answer = 0;
    
    answer = n.toString().split("").map((e) => +e).reduce((acc, cur) => acc + cur);
    
    return answer;
}