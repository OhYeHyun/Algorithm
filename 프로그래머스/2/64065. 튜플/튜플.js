function solution(s) {
    let ss = s.split(/{|}/).filter((item) => item !== "," && item !== "").sort((a, b) => a.length - b.length);
    let answer = [];
    
    for (let i = 0; i < ss.length; i++) {
        let arr = ss[i].split(",").map((item) => + item)
        answer.push(...arr)
    }
    answer = [...new Set([...answer])];
    
    return answer;
}