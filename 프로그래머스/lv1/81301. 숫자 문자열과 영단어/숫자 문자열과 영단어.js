function solution(s) {
    let answer = "";
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let tmp = '';
    s = s.split("");
    
    s.forEach((e, idx) => {
        isNaN(e) ? 
            (tmp += e , arr.includes(tmp) ? 
             (answer += arr.indexOf(tmp), tmp = '') : -1) 
            : answer += e;
    });
    
    return +answer;
}