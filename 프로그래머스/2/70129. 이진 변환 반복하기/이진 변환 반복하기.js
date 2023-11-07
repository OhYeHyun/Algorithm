function solution(s) {
    let removed = 0;
    let cnt = 0;
    let answer = [];
    
    while (s !== "1") {
        let sLength = s.length;
        s = s.split("").filter((item) => item == "1").join("");
        removed += sLength - s.length;
        cnt++;
        s = s.length.toString(2);
    }
    answer.push(cnt, removed)
    
    return answer;
}