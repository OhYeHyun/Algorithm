function solution(x) {
    let answer = true;
    
    x % +x.toString().split("").map(e => +e).reduce((acc, cur) => acc += cur) == 0 ? -1 : answer = false;
    
    return answer;
}