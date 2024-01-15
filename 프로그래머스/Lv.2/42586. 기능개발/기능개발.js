function solution(progresses, speeds) {
    let answer = [];
    let left = []
    let cnt = 1;
    
    progresses.forEach((e, idx) => {
        left.push(Math.ceil((100 - e) / speeds[idx]));
    })    
    
    let boolean = true;
    let cur = 0;
    for (let i = 0; i < left.length; i++) {
        if (boolean) cur = left[i];
        
        if (cur < left[i + 1] || i == left.length - 1) {
            boolean = true;
            answer.push(cnt);
            cnt = 1;
        } else {
            boolean = false;
            cnt++;
        }
    }
    
    console.log(answer)
    return answer;
}