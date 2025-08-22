import java.util.*;

class Solution {
    public int solution(int[] cards) {
        int answer1 = 0;
        int answer2 = 0;
        int n = cards.length;
        
        boolean[] v = new boolean[n];
        
        for (int i = 0; i < n; i++) {            
            if (v[i]) continue;
            
            int cur = cards[i];
            int idx = i;
            int r = 0;
            
            while (true) {
                v[idx] = true;
                r++;
                idx = cur - 1;
                cur = cards[idx];
                
                if (v[idx]) break;
            }
            
            if (r != 0) {
                if (answer2 < r) {
                    if (r <= answer1) {
                        answer2 = r;
                    } else if (answer1 < r) {
                        answer2 = answer1;
                        answer1 = r;   
                    }
                }
            }
        }        
                
        return answer1 * answer2;
    }
}