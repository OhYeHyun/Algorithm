function solution(want, number, discount) {
    let answer = 0;
    
    for (let i = 0; i < discount.length; i++) {
        let ten = discount.slice(i, i + 10);
        if (i + 10 > discount.length) break;
        
        for (let j = 0; j < want.length; j++) {
            if (ten.filter((item) => item == want[j]).length !== number[j]) break;
            if (j == want.length - 1) answer++;
        }
    }

    return answer;
}