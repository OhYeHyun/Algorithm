function solution(numbers) {
    let answer = new Set();
    
    numbers.forEach((e, idx) => {
        for (let i = idx + 1; i < numbers.length; i++) {
            answer.add(e + numbers[i]);
        }
    })
    answer = Array.from(answer).sort((a, b) => a - b);    
    
    return answer;
}