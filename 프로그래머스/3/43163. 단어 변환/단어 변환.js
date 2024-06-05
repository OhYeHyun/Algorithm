function solution(begin, target, words) {
    let answer = 0;
    const visited = new Array(words.length).fill(false);
    const queue = [[begin, answer]];
    
    while (queue.length) {
        let [word, answer] = queue.shift();
        if (word == target) return answer;

        for (let i = 0; i < words.length; i++) {
            let diffCnt = 0;
            if (visited[i]) continue;
            
            for (let j = 0; j < word.length; j++) {
                if (word[j] == words[i][j]) {
                    continue;
                } else {
                    diffCnt++;
                }
                
                if (diffCnt > 1) break;
            }
            if (diffCnt == 1) {
                visited[i] = true;
                queue.push([words[i], answer + 1])
            }
        }
    }
    return answer;
}