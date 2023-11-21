function solution(arr1, arr2) {
    let answer = [];
    
    for (let i = 0; i < arr1.length; i++) {
        let sum = new Array(arr2[0].length).fill(0);
        for (let j = 0; j < arr2.length; j++) {
            for (let k = 0; k < arr2[0].length; k++) {
                sum[k] += arr1[i][j] * arr2[j][k];
            }
        }
            answer.push(sum)
    }    
    return answer;
}