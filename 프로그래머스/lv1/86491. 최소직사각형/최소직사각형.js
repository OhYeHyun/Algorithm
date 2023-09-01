function solution(sizes) {
    let answer = 0;
    let [long, short] = [0, 0];
    
    sizes.forEach((e) => {
        [long, short] = [Math.max(Math.max(...e), long), Math.max(Math.min(...e), short)];
    })
    answer = long * short;
    
    return answer;
}