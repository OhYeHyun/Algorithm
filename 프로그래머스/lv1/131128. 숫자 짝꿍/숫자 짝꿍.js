function solution(X, Y) {
    let answer = "";
    let arrX = new Array(10).fill(0);
    let arrY = new Array(10).fill(0);
    
    [...X].forEach((e) => {
        arrX[e]++;
    });
    [...Y].forEach((e) => {
        arrY[e]++;
    });
    
    for (let i = 9; i >= 0; i--) {
        let min;
        arrX[i] !== 0 && arrY[i] !== 0 ? 
            (min = arrX[i] <= arrY[i] ? arrX[i] : arrY[i], answer += i.toString().repeat(min)) : -1;
    }

    answer == "" ? answer = "-1" : -1;
    answer[0] == 0 ? answer = "0" : -1;
    
    return answer;
}