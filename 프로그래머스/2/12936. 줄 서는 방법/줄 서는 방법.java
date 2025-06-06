import java.util.*;

class Solution {
    public int[] solution(int n, long k) {
        int[] answer = new int[n];
        
        List<Integer> numbers = new ArrayList<>();        
        long[] factorial = new long[n];
        factorial[0] = 1;
        
        for (int i = 1; i < n; i++) {
            factorial[i] = factorial[i - 1] * i;
            numbers.add(i);
        }
        numbers.add(n);
        k--;
        
        for (int i = n - 1; i >= 0; i--) {
            int index = (int) (k / factorial[i]);
            k %= factorial[i];

            answer[n - 1 - i] = numbers.get(index);
            numbers.remove(index);
        }
                
        return answer;
    }
}