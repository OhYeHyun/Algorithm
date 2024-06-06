function solution(s) {
    let answer = "";
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let tmp = '';
    
    s.split("").forEach((e, idx) => {
        if (isNaN(e)) {
            tmp += e;
            if (arr.includes(tmp)) {
                answer += arr.indexOf(tmp);
                tmp = '';
            }
        } else {
            answer += e;
        }
    });
    
    return +answer;
}