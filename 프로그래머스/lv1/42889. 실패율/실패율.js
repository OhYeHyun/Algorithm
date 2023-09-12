function solution(N, stages) {
    let arr = new Array(N);
    let answer = new Array(N);
    let n = stages.length;
    
    for (let i = 1; i <= N; i++) {
        let count = 0;
        for (let j = 0; j < stages.length; j++) {
            stages[j] == i ? count++ : -1;
        }
        arr[i - 1] = count == 0 ? 0 : count / n;
        n -= count;
    }
    
    let arrCopy = [...arr];
    arr.sort((a, b) => b - a);
    
    arr.forEach((e, idx) => {        
        answer[idx] = arrCopy.indexOf(e, e == arr[idx - 1] ? answer[idx - 1] : 0) + 1;
    })
    
    return answer;
}