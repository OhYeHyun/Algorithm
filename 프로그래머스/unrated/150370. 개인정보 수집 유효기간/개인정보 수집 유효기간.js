function solution(today, terms, privacies) {
    let term = new Map();
    let answer = [];
    today = today.split(".").map(Number);
    terms.forEach((e) => {
        e = e.split(" ");
        term.set(e[0], e[1]);
    });
    privacies.forEach((e, idx) => {
        e = e.split(" ");
        let until = day(e[0], term.get(e[1]));
        
        if (until[0] < today[0]) {
            answer.push(idx + 1);
        } else if (until[0] == today[0]) {
            if (until[1] < today[1]) {
                answer.push(idx + 1);
            } else if (until[1] == today[1]) {
                if (until[2] < today[2]) {
                    answer.push(idx + 1);
                }
            }
        }
        
        
    });
    return answer;
    
    function day(d, plus) {
        plus = plus * 28 - 1;
        d = d.split(".").map(Number);
        d[1] -= 1;
        d[2] -= 1;
        d[2] += plus;
        d[1] += Math.floor(d[2] / 28);
        d[2] = d[2] % 28;
        d[1] >= 12 ? (
            d[0] += Math.floor(d[1] / 12),
            d[1] = d[1] % 12
        ) : -1;
        d[1] += 1;
        d[2] += 1;
        
        return d;
    }
}