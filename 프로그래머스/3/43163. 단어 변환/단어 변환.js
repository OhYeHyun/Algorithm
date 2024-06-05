function solution(begin, target, words) {
    let answer = 0;
    const visited = new Array(words.length).fill(false);
    const queue = [[begin, visited, answer]];
    
    while (queue.length > 0) {
        let [word, vArray, answer] = queue.shift();
        
        if (word == target) return answer;

        for (let i = 0; i < words.length; i++) {
            let cnt = 0;
            if (vArray[i]) continue;
            
            for (let j = 0; j < word.length; j++) {
                if (word[j] == words[i][j]) {
                    continue;
                } else {
                    cnt++;
                }
                if (cnt > 1) break;
            }
            if (cnt == 1) {
                vArray[i] = true;
                queue.push([words[i], vArray, answer + 1])
            }
        }
    }
    return answer;
}