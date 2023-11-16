function solution(k, tangerine) {
    let answer = 0;
    let sum = 0;
    let set = [...new Set([...tangerine])];
    let arr = new Array(set.length).fill(0);
        
    tangerine.forEach((e) => {
        arr[set.indexOf(e)]++;
    })

    arr.sort((a, b) => b - a);
    
    for (let i = 0; i < arr.length; i++) {
        if (sum >= k) {
            break;
        } else {
            sum += arr[i];
            answer++;
        }
    }
    
    return answer;
}