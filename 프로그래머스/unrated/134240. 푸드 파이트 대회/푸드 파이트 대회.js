function solution(food) {
    let answer = '';
    food.shift();
    
    food.forEach((e, idx) => {
        answer += String(idx + 1).repeat(Math.floor(e / 2));
    })
    answer = answer.concat(0, [...answer].reverse().join(''))
    
    return answer;
}