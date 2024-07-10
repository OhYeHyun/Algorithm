function solution(land) {
    let answer = [...land[0]]

    for (let i = 1; i < land.length; i++) {
        let temp = new Array(4).fill(0);
        
        for (let j = 0; j < 4; j++) {
            temp[j] += Math.max(...answer.filter((_, idx) => idx !== j)) + land[i][j]
        }
        answer = temp
    }
        
    return Math.max(...answer);
}