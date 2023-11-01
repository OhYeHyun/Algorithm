function solution(s) {
    let answer = s;
    
    return s.length % 2 == 0 ? answer.substr((s.length / 2) - 1, 2) : answer.substr(((s.length + 1) / 2) - 1, 1);
}