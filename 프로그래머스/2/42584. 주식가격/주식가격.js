function solution(prices) {
    let answer = [];
    const len = prices.length;

    for (let i = 0; i < len; i++) {
        let curP = prices[i];
        let count = 0;
        
        for (let j = i + 1; j <= len; j++) {
            let lessP = prices[j];
            
            if (j == len - 1 || curP > lessP) {
                answer.push(++count);
                break;
            }
            count++;
        }
    }
    answer.push(0)
    
    return answer;
}