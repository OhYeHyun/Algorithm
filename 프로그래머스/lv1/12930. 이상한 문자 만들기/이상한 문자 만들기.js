function solution(s) {
    let answer = '';

    s.split(" ").forEach((e) => {
        if (e !== '') {
            let str = '';
            for (let i = 0; i < e.length; i++) {
                let strI = i % 2 == 0 ? e[i].toUpperCase() : e[i].toLowerCase();
                str += strI;
            }
            answer.trim().length == 0 ? answer += str : answer += (" " + str);  
        } else {
            answer += " ";
        }
    })
    
    return answer;
}