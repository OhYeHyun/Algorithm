function solution(priorities, location) {
    let answer = 0;
    let sorted = [...priorities].sort((a, b) => b - a);
    
    for (let i = 0; i < priorities.length; i) {
        if (priorities[i] == sorted[0]) {
            sorted.shift();
            answer++;
            if (i == location) return answer;
        } 
        i == priorities.length - 1 ? i = 0 : i++;
    }
}