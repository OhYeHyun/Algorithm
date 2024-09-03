function solution(order) {
    let answer = 0;
    const stack = [];
    
    let originCur = 0;
    let orderCur = 0;
    
    while (orderCur < order.length) {
        const orderBox = order[orderCur]
        const originBox = originCur + 1;

        if (orderBox === originBox) {
            answer++;
            originCur++;
            orderCur++;
            continue;
        }
        if (orderBox === stack.at(-1)) {
            stack.pop();
            answer++;
            orderCur++;
            continue;
        } 
        
        if (stack.at(-1) > orderBox) {
            return answer;
        } else {
            stack.push(originBox)
            originCur++;
        }
    }
    return answer;
}
