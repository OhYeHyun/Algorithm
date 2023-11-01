function solution(s) {
    let cnt = 0;
    
    s.toLowerCase().split("").forEach((e) => {
        e == "p" ? cnt++ : (e == "y" ? cnt-- : -1);
    });
    
    

    return cnt == 0 ? true : false;
}