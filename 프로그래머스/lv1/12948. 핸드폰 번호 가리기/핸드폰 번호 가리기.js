function solution(phone_number) {
    let answer = phone_number.split("");
    
    for (let i = 1; i <= answer.length; i++) {
        i > 4 ? answer.splice(answer.length - i, 1, "*") : -1;
    }

    return answer.join("");
}