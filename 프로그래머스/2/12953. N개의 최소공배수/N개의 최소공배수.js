function solution(arr) {

    for (let i = 0; arr.length !== 1; i++) {
        for (let j = 1; j <= arr[i]; j++) {
            if (arr[i] % j == 0) {
                let num = arr[i] / j;
                if (arr[i + 1] % num == 0) {
                    arr.splice(i, 2, arr[i] * arr[i + 1] / num);
                    i = 0;
                    j = 1;
                } else {
                    continue;
                }
            }
        }
    }
    
    return arr[0];
}