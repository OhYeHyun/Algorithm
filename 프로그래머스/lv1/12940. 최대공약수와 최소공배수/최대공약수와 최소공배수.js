function solution(n, m) {
    let answer = [], arr = [];
    let max = Math.max(n, m), min = Math.min(n, m);

    for (let i = 1; i <= Math.sqrt(max); i++) {
        max % i == 0 ? (i == Math.sqrt(max) ? arr.push(i) : (arr.push(i), arr.push(max / i))) : -1;
    }
    
    arr = arr.sort((a, b) => b - a).filter((e) => min % e == 0);
    answer.push(arr[0]);
    answer.push(arr[0] * ((max / arr[0]) * (min / arr[0])));
    
    return answer;
}