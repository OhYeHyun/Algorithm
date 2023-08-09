function solution(cards1, cards2, goal) {
    let order = [];
    const cards = [cards1, cards2];
    let answer = "Yes";
    
    cards.forEach((e) => {
        e.forEach((el) => {
            order.push(goal.indexOf(el))
        })
        while (order[order.length - 1] == -1) {
            order.splice(order[order.length - 1], 1)
        }
        if (order.includes(-1)) answer = "No";

        let orderSorted = [...order];
        orderSorted.sort((a, b) => a - b);

        if (orderSorted.join('') !== order.join('')) {
            answer = "No";
        } else {
            order = [];
            orderSorted = [];
        }
    })
    return answer;
}