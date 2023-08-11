function solution(today, terms, privacies) {
    let term = new Map();
    let answer = [];
    today = today.split(".");
    
    const total = Number(today[0]) * 12 * 28 + Number(today[1]) * 28 + Number(today[2]);
    terms.forEach((e) => {
        e = e.split(" ");
        term.set(e[0], e[1]);
    });
    privacies.forEach((e, idx) => {
        e = e.split(/\.| /);
        let until = Number(e[0]) * 12 * 28 + Number(e[1]) * 28 + Number(e[2]) - 1 + term.get(e[3]) * 28;
        
        until < total ? answer.push(idx + 1) : -1;
        
    });
    return answer;
}