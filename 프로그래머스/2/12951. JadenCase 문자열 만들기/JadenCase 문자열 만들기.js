function solution(s) {
    let answer = '';
    
    s.split(' ').forEach((e) => {
        e !== '' ? (e = e.toLowerCase(), answer += e.replace(e[0], e[0].toUpperCase())): -1;
        answer += " ";
    })
    
    return answer.substr(0, answer.length - 1);
}