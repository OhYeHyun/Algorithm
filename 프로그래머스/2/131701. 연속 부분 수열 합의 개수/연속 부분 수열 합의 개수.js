function solution(elements) {
    let answer = new Set();
    let n = elements.length;
    
    elements = elements.concat(elements);
    
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= n; j++) {
            answer.add(elements.slice(i, i + j).reduce((acc, cur) => acc += cur));
        }
    }
    
    return answer.size;
}