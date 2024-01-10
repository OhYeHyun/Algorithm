function solution(s) {
    let ss = s.split(/{|}/).filter((item) => item !== "," && item !== "").sort((a, b) => a.length - b.length)
    let answer = new Set();
    
    ss.forEach((e) => e.split(",").forEach((ee) => answer.add(+ee)))
    
    return [...answer];
}