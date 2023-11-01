function solution(s) {
    let answer = s;
    return s.split("").sort().reverse().join("");
}