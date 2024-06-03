function solution(numbers, target) {
    let answer = 0;

    const dfs = (idx, curN) => {
        if (idx == numbers.length) {
            curN == target ? answer++ : -1;
            return;  
        } 
        
        dfs(idx + 1, curN + numbers[idx]);
        dfs(idx + 1, curN - numbers[idx]);
    }
    
    dfs(0, 0)
    return answer;
}