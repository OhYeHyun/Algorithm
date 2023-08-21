function solution(k, score) {
    let topScore = [];
    let lowest = [];
    score.forEach((e, idx) => {
        topScore.push(+e);
        topScore.sort((a, b) => b - a);
        topScore.length <= k ? lowest.push(topScore.at(-1)) : (
            topScore.splice(k, 1),
            lowest.push(topScore.at(-1))
        )
    })
    
    
    return lowest;
}