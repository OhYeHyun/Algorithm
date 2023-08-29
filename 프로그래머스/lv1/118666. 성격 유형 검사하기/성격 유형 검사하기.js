function solution(survey, choices) {
    let answer = '';
    const kind = ["R", "T", "C", "F", "J", "M", "A", "N"];
    let arr = new Array(8).fill(0);
    
    survey.forEach((e, idx) => {
        let [a, b] = Array.from(e);
        arr[kind.indexOf(choices[idx] > 4 ? b : a)] += Math.abs(choices[idx] - 4)
    })
    
    for (let i = 0; i < 8; i += 2) {
         answer += kind[(arr[i] >= arr[i + 1] ? i : i + 1)];
    }
    
    return answer;
}