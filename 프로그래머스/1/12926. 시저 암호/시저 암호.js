function solution(s, n) {
    let answer = '';
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i);
        if (code !== 32) {
            let num = code < 97 ? 65 : 97;
            code = ((code - num + n) % 26) + num;     
            answer += String.fromCharCode(code);
        } else {
            answer += " ";
        }
    }
    return answer;
}