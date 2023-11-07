function solution(s) {
    let answer = [0, 0];
    
    while (s !== "1") {
        let sLength = s.length;
        s = s.split("").filter((item) => item == "1").join("");
        answer[0]++;
        answer[1] += sLength - s.length;
        s = s.length.toString(2);
    }
    
    return answer;
}