function solution(board, skill) {
    let answer = 0;
    const arr = Array.from(Array(board.length + 1), () => Array(board[0].length + 1).fill(0));    
    
    skill.forEach((e) => {
        let [firstY, firstX] = [e[1], e[2]];
        let [lastY, lastX] = [e[3] + 1, e[4] + 1];
        let amount = (e[0] == 1 ? e[5] : -e[5]);
        
        arr[firstY][firstX] -= amount;
        arr[firstY][lastX] += amount;
        arr[lastY][firstX] += amount;
        arr[lastY][lastX] -= amount;
    })
    
    for (let y = 0; y < arr.length; y++) {
        let sumY = 0;
        for (let x = 0; x < arr[0].length; x++) {
            arr[y][x] += sumY;
            sumY = arr[y][x];       
        }
        arr[y].pop();
    }
    arr.pop();
    
    for (let x = 0; x < arr[0].length; x++) {
        let sumX = 0;
        for (let y = 0; y < arr.length; y++) {
            arr[y][x] += sumX;
            sumX = arr[y][x];
        }            
    }    
    board = board.map((e, y) => e.map((ee, x) => ee + arr[y][x]));
    board.forEach((e) => e.forEach((ee) => (ee > 0) && answer++));
    
    return answer;
}