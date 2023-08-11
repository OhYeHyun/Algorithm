function solution(today, terms, privacies) {
    let term = new Map();
    let answer = [];
    today = today.split(".").map(Number);
    
    const total = today[0] * 12 * 28 + today[1] * 28 + today[2];
    terms.forEach((e) => {
        e = e.split(" ");
        term.set(e[0], e[1]);
    });
    privacies.forEach((e, idx) => {
        e = e.split(" ");
        let num = e.pop();
        
        e = e[0].split(".").map(Number);
        let until = e[0] * 12 * 28 + e[1] * 28 + e[2] - 1 + term.get(num) * 28;
        
        until < total ? answer.push(idx + 1) : -1;
    });
    return answer;
}