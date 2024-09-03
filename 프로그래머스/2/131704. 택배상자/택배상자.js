function solution(order) {
    let answer = 0;
    const stack = [];
    
    let orderIdx = 0;
    
    for (let i = 0; i < order.length; i++) {
        stack.push(i + 1);
        
        while (stack.length > 0) {
            if (stack.at(-1) === order[orderIdx]) {
                stack.pop();
                answer++;
                orderIdx++;
            } else break;
        }
    }
    return answer;
}