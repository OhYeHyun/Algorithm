function solution(array, commands) {
    let answer = [];
    
    commands.forEach((e) => {
        answer.push(
            array.filter((el, idx) => { if (idx >= e[0] - 1 && idx <= e[1] - 1) return el})
            .sort((a, b) => a - b)[e[2] - 1]
        )
    })
    
    return answer;
}