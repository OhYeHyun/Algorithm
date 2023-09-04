function solution(absolutes, signs) {
    let answer = 0;
    
    absolutes.forEach((e, idx) => {
        signs[idx] ? answer += e : answer -= e;
    })
    
    return answer;
}