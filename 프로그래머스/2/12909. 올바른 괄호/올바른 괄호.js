function solution(s){
    let answer = true;
    let cnt = 0;
    
    s.split("").forEach((e, idx) => {
        idx == 0 ? (e == "(" ? cnt++ : answer = false) : (e == "(" ? cnt++ : cnt--);
        cnt < 0 ? answer = false : -1;
    })
    cnt !== 0 ? answer = false : -1;
    return answer;
}