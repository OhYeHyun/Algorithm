function solution(keymap, targets) {
    let concat = new Map();
    let answer = [];
    let cnt = 0;
    keymap.forEach((e) => {
        [...e].forEach((el, index) => {
            if (concat.has(el)) {
                concat.get(el) > index ? concat.set(el, index) : -1;
            } else {
                concat.set(el, index);
            }
        })
    })
    targets.forEach((e) => {
        cnt = 0;
        [...e].forEach((el, index) => {
            if (concat.has(el)) {
                cnt == -1 ? cnt = -1 : cnt += concat.get(el) + 1;
            } else {
                cnt = -1;
            }  
        })
        answer.push(cnt);
    })
    return answer;
}