function solution(order) {
    let answer = 0;
    const stack = [];
    let originBox = 1;

    for (let i = 0; i < order.length; i++) {
        const orderBox = order[i];

        if (stack.length > 0 && stack[stack.length - 1] === orderBox) {
            stack.pop();
            answer++;
            continue;
        }

        while (originBox <= orderBox) {
            if (originBox === orderBox) {
                answer++;
                originBox++;
                break;
            } else {
                stack.push(originBox++);
            }
        }

        if (stack.length > 0 && stack[stack.length - 1] > orderBox) {
            break;
        }
    }

    return answer;
}