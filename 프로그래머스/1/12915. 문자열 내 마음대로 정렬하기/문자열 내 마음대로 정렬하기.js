function solution(strings, n) {
    let answer = [];
    let set = new Set();
    
    strings.forEach((e) => {
        set.add(e[n]);
    });
    
    [...set].sort().forEach((e) => {
        let part = [];
        for (let i = 0; i < strings.length; i++) {
            strings[i][n] == e ? part.push(strings[i]) : -1;
        }
        answer.push(...part.sort());
    });
    
    return answer;
}