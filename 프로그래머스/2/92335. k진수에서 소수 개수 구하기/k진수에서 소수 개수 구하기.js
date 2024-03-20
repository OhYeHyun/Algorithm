function solution(n, k) {
    let answer = 0;
    let arr = n.toString(k).split('0');
    
    for (let i = 0; i < arr.length; i++) {
        let num = +arr[i];
        if (num !== 0 && num !== 1) {       
            if (num == 2 || num == 3) answer++;
            for (let j = 2; j <= Math.sqrt(num); j++) {
                if (num % j == 0) break;
                if (j == Math.floor(Math.sqrt(num))) answer++;
            }
        }
    }
    return answer;
}