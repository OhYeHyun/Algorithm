function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b) => b - a);
    
    score.forEach((e, idx) => {
        (idx + 1) % m == 0 ? answer += e * m : -1;
    })
    
    return answer;
}