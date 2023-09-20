function solution(n, arr1, arr2) {
    let answer = [];
    
    arr1 = arr1.map((e) => e.toString(2).padStart(n, 0));
    arr2 = arr2.map((e) => e.toString(2).padStart(n, 0));

    for (let i = 0; i < n; i++) {
        let arr = [];
        for (let j = 0; j < n; j++) {
            arr1[i][j] == 0 && arr2[i][j] == 0 ?
                arr.push(" ") : (arr1[i][j] == 1 || arr2[i][j] == 1 ? arr.push("#") : -1);
        }
        answer.push(arr.join(''));
    }
    
    return answer;
}