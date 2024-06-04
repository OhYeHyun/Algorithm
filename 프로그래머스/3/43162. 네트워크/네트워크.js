function solution(n, computers) {
    let answer = 0;
    const len = computers.length;
    const visited = new Array(len).fill(false)
    
    const dfs = (i) => {
        visited[i] = true;
        
        for (let j = 0; j < len; j++) {
            if (!visited[j] && computers[i][j] == 1) {
                dfs(j);
            }
        }        
    }
    
    for (let i = 0; i < len; i++) {
        if (!visited[i]) {
            dfs(i);
            answer++;
        }
    }
    
    return answer;
}