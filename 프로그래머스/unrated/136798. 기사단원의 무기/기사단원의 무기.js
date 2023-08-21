function solution(number, limit, power) {
    let answer = 0;
    let arr = [];
    
    for (let i = 1; i <= number; i++) {
        let cnt = 0;
        for (let j = 1; j <= Math.sqrt(i); j++) {
            j * j == i ? cnt++ : (
                i % j == 0 ? cnt += 2 : -1
            );
        }
        arr.push(cnt);
    }
    
    answer = arr.map((item) => item > limit ? item = power : item).reduce((acc, cur) => acc += cur);
    
    return answer;
}