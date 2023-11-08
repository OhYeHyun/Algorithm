function solution(n) {
    let answer = 0;
    const nCnt = n.toString(2).split("").filter((item) => item == "1").length;
    
    for (let i = n + 1; i <= 2 * n; i++) {
        let iCnt = i.toString(2).split("").filter((item) => item == "1").length;
        if (iCnt == nCnt) {
            answer = i;
            break;
        }
    }
    
    return answer;
}