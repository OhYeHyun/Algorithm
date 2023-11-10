function solution(brown, yellow) {
    let answer = [];
    let AplusB = (brown + 4) / 2;
    let AtimesB = brown + yellow;
    
    for (let a = 3; a <= 5000; a++) {
        if (a * (AplusB - a) == AtimesB) {
            answer.push(AplusB - a, a);
            break;
        }
    }
    
    return answer;
}