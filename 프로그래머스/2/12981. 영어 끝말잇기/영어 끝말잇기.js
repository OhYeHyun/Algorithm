function solution(n, words) {
    let answer = [];
    let arr = [];
    let last = '';
    
    for (let i = 0; i < words.length; i++) {
        if (i !== 0 && last !== words[i][0] || arr.includes(words[i])) {
            answer.push((i % n) + 1, Math.floor(i / n) + 1);
            break;
        } else {
            last = words[i][words[i].length - 1];
            arr.push(words[i]);
        }
    }
    

    return !!answer[0] ? answer : [0, 0];
}