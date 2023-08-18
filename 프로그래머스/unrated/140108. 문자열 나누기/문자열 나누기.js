function solution(s) {
    s = s.split("");
    let cor = 0;
    let wrong = 0;
    let cnt = 0;
    let start = s[0];
    
    s.forEach((e, idx) => {
        e !== start ? wrong++ : cor++
        wrong == cor ? (
            start = s[idx + 1],
            cor = 0,
            wrong = 0,
            cnt++
        ) : (!s[idx + 1] ? cnt++ : -1);
    })
    return cnt;
}