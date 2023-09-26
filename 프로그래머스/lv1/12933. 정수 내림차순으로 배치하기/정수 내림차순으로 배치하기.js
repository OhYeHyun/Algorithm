function solution(n) {
    let answer = 0;

    answer = +n.toString().split("").map((e) => +e).sort((a, b) => b - a).join("");
    
    return answer;
}