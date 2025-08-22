import java.util.*;

class Solution {
    public int[] solution(long begin, long end) {
        int cnt = (int) (end - begin) + 1;        
        int[] answer = new int[cnt];
                
        long cur = end;
        for (int i = cnt - 1; i >= 0; i--) {
            answer[i] = cal(cur);
            cur--;
        }
        
        return answer;
    }
    
    private int cal(long n) {
        if (n == 1) return 0;
        
        int limit = 10_000_000;
        int result = 1;
        
        for (long i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                long big = n / i;
                long small = i; 
                
                if (big <= limit) return (int) big;
                if (small <= limit) result = Math.max(result, (int) small);
            }
        }
        
        return result;
        
    }
}