import java.util.*;

class Solution {
    private Set<Integer> primeSet = new HashSet<>();
    private boolean[] visited;
    private String numbers;
    private int numLength;

    public int solution(String numbers) {
        this.numbers = numbers;
        this.numLength = numbers.length();
        this.visited = new boolean[numLength];
        
        for (int i = 0; i < numLength; i++) {
            visited[i] = true;
            dfs(Integer.parseInt(String.valueOf(numbers.charAt(i))));
            visited[i] = false;
        }
        
        return primeSet.size();
    }

    private void dfs(int current) {
        if (isPrime(current)) {
            primeSet.add(current);
        }

        for (int i = 0; i < numLength; i++) {
            if (!visited[i]) {
                visited[i] = true;
                dfs(current * 10 + Integer.parseInt(String.valueOf(numbers.charAt(i))));
                visited[i] = false;
            }
        }
    }

    private boolean isPrime(int num) {
        if (num <= 1) return false;
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) return false;
        }
        return true;
    }
}
