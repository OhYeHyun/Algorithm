function solution(numbers) {
    const primeSet = new Set();
    const numLength = numbers.length;
    const visited = new Array(numLength).fill(false);
    
    const dfs = (current) => {    
        if (isPrime(current)) primeSet.add(current);
        
        for (let i = 0; i < numLength; i++) {
            if (!visited[i]) {
                visited[i] = true;
                dfs(current * 10 + parseInt(numbers[i]));
                visited[i] = false;
            }
        }
    }
    
    for (let i = 0; i < numLength; i++) {
        visited[i] = true;
        dfs(parseInt(numbers[i]));
        visited[i] = false;
    }
    
    return primeSet.size;
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    
    return true;
}