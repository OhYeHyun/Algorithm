function solution(arr, divisor) {
    let answer = [];
    
    answer = arr.filter((e) => e % divisor == 0).sort((a, b) => a - b);
    answer.length == 0 ? answer.push(-1) : -1;
    
    return answer;
}