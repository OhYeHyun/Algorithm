function solution(cards1, cards2, goal) {
    let order = [];
    let answer = "No";
    
    cards1.forEach((e) => {
        order.push(goal.indexOf(e))
    })
    while (order[order.length - 1] == -1) {
        order.splice(order[order.length - 1], 1)
    }
    if (order.includes(-1)) return answer
    console.log(order)
    
    let orderSorted = [...order];
    orderSorted.sort((a, b) => a - b);
    
    if (orderSorted.join('') !== order.join('')) {
        return answer;
    } else {
        order = [];
        orderSorted = [];
    } 
    
    cards2.forEach((e) => {
        order.push(goal.indexOf(e))
        order = order.filter((el) => el >= 0)
    })
    while (order[order.length - 1] == -1) {
        order.splice(order[order.length - 1], 1)
    }
    if (order.includes(-1)) return answer
    
    orderSorted = [...order];
    orderSorted.sort((a, b) => a - b);

    if (orderSorted.join('') !== order.join('')) {
        return answer;
    } else {
        answer = "Yes"
    }
    return answer;
    
}