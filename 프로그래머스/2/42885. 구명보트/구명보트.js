function solution(people, limit) {
    people.sort((a, b) => b - a);
    
    let over = people.filter((item) => item > limit / 2).reverse();
    let under = people.filter((item) => item <= limit / 2);
    
    let answer = over.length;
    let sum = under.length;
    
    let num = 0;
    
    for (let i = 0; i < over.length; i++) {
        for (let j = num; j < under.length; j++) {
            if (over[i] + under[j] <= limit) {
                sum--;
                num = j + 1;
                break;
            }
        }
    }
    
    return answer += (sum % 2 == 0 ? sum / 2 : (sum + 1) / 2);
}