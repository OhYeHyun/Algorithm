function solution(numbers) {
    const primeSet = new Set();
    const numLength = numbers.length;
    
    const dfs = (current, visited) => {    
        const number = parseInt(current);
        if (isPrime(number)) primeSet.add(number);
        
        for (let i = 0; i < numLength; i++) {
            if (!visited[i]) {
                visited[i] = true;
                dfs(current + numbers[i], visited);
                visited[i] = false;
            }
        }
    }
    
    for (let i = 0; i < numLength; i++) {
        const visited = new Array(numLength).fill(false);
        visited[i] = true;
        
        dfs(numbers[i], visited);
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