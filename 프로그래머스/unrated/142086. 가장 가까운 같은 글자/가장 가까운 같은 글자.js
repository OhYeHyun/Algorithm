function solution(s) {
    let arrS = [];
    let answer = [];
    s = s.split("");

    s.forEach((e, idx) => {
        !arrS.includes(e) ? answer.push(-1) : answer.push(idx - arrS.lastIndexOf(e));
        arrS.push(e);
    })
    return answer;
}