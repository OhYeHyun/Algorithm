function solution(number, k) {
    let answer = '';
    const answerL = number.length - k;
    
    while (answerL !== answer.length) {
        let max = '';
        for (let i = 0; i <= k; i++) {
            if (number[i] == 9) {
                max = 9;
                break;
            }
            max = Math.max(max, number[i]);
        }
        k -= number.indexOf(max);
        answer += max;
        number = number.slice(number.indexOf(max) + 1);
    }

    return answer;
}