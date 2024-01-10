function solution(s) {
    let ss = s.split(/{|}/).filter((item) => item !== "," && item !== "");
    let answer = [];
    let j = 1;
    
    for (let i = 0; i < ss.length; i) {
        let arr = ss[i].split(",");
        if (arr.length == j) {
            answer.push(...arr)
            j++;
            i = 0;
        } else if (j > ss.length) {
            break;
        } else {
            i++
        }
    }
    answer = [...new Set([...answer])].map((item) => +item);
    
    return answer;
}