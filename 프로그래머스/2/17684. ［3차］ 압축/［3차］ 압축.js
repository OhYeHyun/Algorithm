function solution(msg) {
    let answer = [];
    let arr = new Map();
    let cnt = 1;
    let len = msg.length;
    
    for (let i = 65; i <= 90; i++) {
        arr.set(String.fromCharCode(i), cnt++);
    }
    
    for (let i = 0; i < len; i++) {        
        let w = msg[i];
        for (let j = i + 1; j <= len; j++) {
            let c = msg[j];
            if (arr.has(w)) {
                if (j == len) {
                    answer.push(arr.get(w))
                    i = j - 1;
                    break;
                }
                w += c
            } else {
                arr.set(w, cnt++);
                answer.push(arr.get(w.slice(0, w.length - 1)))
                i = j - 2;
                break;
            }
        }
    }
    return answer;
}