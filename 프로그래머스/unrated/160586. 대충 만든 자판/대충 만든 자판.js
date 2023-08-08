function solution(keymap, targets) {
    let concat = new Map();
    let answer = [];
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
        answer.push(e.split('').reduce((cnt, el) => cnt += concat.get(el) + 1, 0) || -1) 
    })
    return answer;
}