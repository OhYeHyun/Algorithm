function solution(numbers, hand) {
    let answer = '';
    const left = [1, 4, 7, 11];
    const right = [3, 6, 9, 12];
    const middle = [2, 5, 8, 0];
    let leftHand = 11;
    let rightHand = 12;
    
    numbers.forEach((e, idx) => {
        let leftDistance = 0;
        let rightDistance = 0;
        left.includes(e) ? (answer += "L", leftHand = e) : (
            right.includes(e) ? (answer += "R", rightHand = e) : (
                left.indexOf(leftHand) == -1 ? 
                    leftDistance = Math.abs(middle.indexOf(e) - middle.indexOf(leftHand)) :
                    leftDistance = Math.abs(middle.indexOf(e) - left.indexOf(leftHand)) + 1,
                right.indexOf(rightHand) == -1 ?
                    rightDistance = Math.abs(middle.indexOf(e) - middle.indexOf(rightHand)) :
                    rightDistance = Math.abs(middle.indexOf(e) - right.indexOf(rightHand)) + 1,
                leftDistance == rightDistance ? 
                    (hand == "right" ? (answer += "R", rightHand = e) 
                     : (answer += "L", leftHand = e)) : (
                    leftDistance < rightDistance ? (answer += "L", leftHand = e) 
                        : (answer += "R", rightHand = e)
                )
            )
        )
    });
        
    return answer;
}