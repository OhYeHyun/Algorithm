function solution(food) {
    let answer = '';
    let answerR = '';
    food.shift();
    
    food.forEach((e, idx) => {
        Math.floor(e / 2) == 0 ? -1 : answer += String(idx + 1).repeat(Math.floor(e / 2));
    })
    answerR = [...answer].reverse().join('');
    answer = answer.concat(0, answerR)
    
    return answer;
}