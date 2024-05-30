function solution(word) {
    let answer = 0;
    const dir = new Map([['A', 1], ['E', 2], ['I', 3], ['O', 4], ['U', 5]]);
        
    for (let i = 0; i < word.length; i++) {
        let curN = dir.get(word[i]);
        let n = 5 - i;
        
        for (let j = 0; j < n; j++) {
            answer += (curN - 1) * 5 ** j;
        }
        
        answer++;
        
    }
    return answer;
}


