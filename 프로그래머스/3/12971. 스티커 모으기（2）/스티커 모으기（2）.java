import java.util.*;

class Solution {
    public int solution(int sticker[]) {
        int answer = 0;
        int n = sticker.length;
        
        int[] dp1 = new int[n];
        int[] dp2 = new int[n];
        
        for (int i = 0; i < n; i++) {
            if (i == 0) {
                dp1[0] = sticker[0];
                continue;
            }
            
            if (i == 1) {
                dp1[1] = dp1[0];
                continue;
            }
            
            if (i == n - 1) {
                dp1[i] = dp1[i - 1];
                continue;
            }
            
            dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
        
        }
        
                
        for (int i = 0; i < n; i++) {
            if (i == 0) {
                dp2[0] = 0;
                continue;
            }
            
            if (i == 1) {
                dp2[1] = sticker[1];
                continue;
            }

            dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]);
        }
        

        return Math.max(dp1[n - 1], dp2[n - 1]);
    }
}