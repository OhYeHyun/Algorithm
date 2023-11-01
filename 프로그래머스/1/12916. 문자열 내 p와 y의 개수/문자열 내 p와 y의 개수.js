function solution(s) {
    let cnt = 0;
    let answer = true;
    
    s.toLowerCase().split("").forEach((e) => {
        e == "p" ? cnt++ : (e == "y" ? cnt-- : -1);
    });
    
    cnt == 0 ? -1 : answer = false;

    return answer;
}