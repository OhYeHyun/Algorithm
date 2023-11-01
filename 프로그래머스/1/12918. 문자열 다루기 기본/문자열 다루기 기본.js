function solution(s) {
    let answer = true;
    
    s.length == 4 || s.length == 6 
        ? (s.split("").filter((e) => !isNaN(e)).join("") == s ? -1 : answer = false) : answer = false;
    
    return answer;
}