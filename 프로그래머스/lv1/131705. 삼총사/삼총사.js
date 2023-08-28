function solution(number) {
    let answer = 0;
    
    number.forEach((e, idx) => {
        for (let i = idx + 1; i < number.length; i++ ) {
            let key = (e + number[i]) * -1;
            for (let j = i + 1; j < number.length; j++) {
                number[j] == key ? answer++ : -1; 
            }
        }
    })
    return answer;
}