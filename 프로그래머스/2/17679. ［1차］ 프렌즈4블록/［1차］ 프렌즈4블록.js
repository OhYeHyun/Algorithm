function solution(m, n, board) {
    let answer = 0;
    board = board.map((e) => e.split(""));
    
    while (true) {
        const remove = Array.from(Array(m), () => new Array(n).fill(0));
        let found = false;

        for (let row = 1; row < m; row++) {
            for (let col = 1; col < n; col++) {
                if (board[row][col] === "_") continue;
                
                const cur = board[row][col];
                if (cur === board[row - 1][col] && cur === board[row][col - 1] 
                    && cur === board[row - 1][col - 1]) {
                    remove[row][col] = remove[row - 1][col] 
                        = remove[row][col - 1] = remove[row - 1][col - 1] = 1;
                    found = true;
                }
            }
        }
        
        if (!found) return answer;

        answer += remove.reduce((acc, cur) => acc + cur.reduce((a, c) => a + c, 0), 0);

        for (let col = 0; col < n; col++) {
            let writeIdx = m - 1;
            for (let row = m - 1; row >= 0; row--) {
                if (remove[row][col] === 0) {
                    board[writeIdx--][col] = board[row][col];
                }
            }
            for (let row = writeIdx; row >= 0; row--) {
                board[row][col] = "_";
            }
        }
    }
}