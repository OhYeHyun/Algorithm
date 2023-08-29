function solution(survey, choices) {
    let answer = '';
    const kind = ["R", "T", "C", "F", "J", "M", "A", "N"];
    let arr = new Array(8).fill(0);
    
    survey.forEach((e, idx) => {
        choices[idx] == 4 ? -1 : (
            choices[idx] > 4 ?
            arr[kind.indexOf(e[1])] += choices[idx] - 4 : arr[kind.indexOf(e[0])] += 4 - choices[idx]
        );
    })
    
    for (let i = 0; i < 8; i += 2) {
        arr[i] >= arr[i + 1] ? answer += kind[i] : answer += kind[i + 1];
    }
    
    return answer;
}