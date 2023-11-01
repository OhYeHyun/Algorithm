function solution(arr) {
    let answer = [];
    
    arr.forEach((e, idx) => {
        e !== answer.at(-1) ? answer.push(e) : -1;
    })
    
    return answer;
}