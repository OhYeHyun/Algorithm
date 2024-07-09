function solution(topping) {
    let answer = 0;
    const right = new Map();
    let type = 0;
    
    for (let i = 0; i < topping.length; i++) {
        if (right[topping[i]]) {
            right[topping[i]]++
        } else {
            right[topping[i]] = 1;
            type++;
        }
    }
    
    const left = new Set();
    for (let i = 0; i < topping.length; i++) {
        right[topping[i]]--;
        left.add(topping[i]);
    
        if (right[topping[i]] === 0) {
            type--;
        }
        
        if (left.size === type) {
            answer++;
        } else if (left.size > type) {
            return answer
        }
    }    
}