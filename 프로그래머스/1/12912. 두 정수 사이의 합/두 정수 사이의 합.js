function solution(a, b) {
    let answer = [];
    
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        answer.push(i);
    }
    
    return a !== b ? answer.reduce((acc, cur) => acc += cur) : a;
}