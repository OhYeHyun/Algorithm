function solution(a, b) {
    let answer = ["FRI","SAT","SUN","MON","TUE","WED","THU"];
    let num = a <= 2 ? 31 * (a - 1) + b : (
        a <= 8 ? 29 + (31 * (Math.ceil((a - 1) / 2))) + (30 * (Math.floor((a - 1) / 2) - 1)) + b 
                            : 244 + (30 * (Math.ceil((a - 9) / 2))) + (31 * (Math.floor((a - 9) / 2))) + b);
    
    return answer[((num - 1) % 7)];
}