function solution(people, limit) {
    let answer = 0;
    let over = [];
    let under = [];
    let num = 0;
    let sum = 0;
    
    people.sort((a, b) => b - a);
    
    over = people.filter((item) => item > limit / 2).reverse();
    under = people.filter((item) => item <= limit / 2);
    answer = over.length;
    sum = under.length;
    
    for (let i = 0; i < over.length; i++) {
        for (let j = num; j < under.length; j++) {
            if (over[i] + under[j] <= limit) {
                sum--;
                num = j + 1;
                break;
            }
        }
    }
    answer += (sum % 2 == 0 ? sum / 2 : (sum + 1) / 2);
    
    return answer;
}