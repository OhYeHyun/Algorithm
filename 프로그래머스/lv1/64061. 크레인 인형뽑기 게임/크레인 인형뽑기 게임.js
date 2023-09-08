function solution(board, moves) {
    let answer = 0;
    let basket = [];

    moves.forEach((e) => {
        for (let i = 0; i < board.length; i++) {
            board[i][e - 1] !== 0 ? (
                basket.at(-1) !== board[i][e - 1] ? 
                    basket.push(board[i][e - 1]) : (basket.splice(basket.length - 1, 1), answer += 2),
                board[i].splice(e - 1, 1, 0), i = board.length
            ) : -1;
        }
    })
    
    return answer;
}