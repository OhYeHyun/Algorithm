function solution(s) {
    let answer = '';
    s = s.split(" ").sort((a, b) => a - b).map((item) => +item);

    answer = `${Math.min(...s)} ${Math.max(...s)}`
    
    return answer;
}