import java.util.*;

class Solution {
    private int[] answer = new int[2];
    private int[][] users;
    private int[] emoticons;
    
    public int[] solution(int[][] users, int[] emoticons) {
        this.users = users;
        this.emoticons = emoticons;
        
        int[] rate = new int[emoticons.length];
        dfs(0, rate);
                
        return answer;
    }
    
    private void dfs(int idx, int[] rate) {
        if (idx == rate.length) {
            int[] result = cal(rate);
            if (answer[0] < result[0] || (answer[0] == result[0] && answer[1] < result[1])) {
                answer = result;
            }
            return;
        }
        
        for (int j = 10; j <= 40; j += 10) {
            rate[idx] = j;
            dfs(idx + 1, rate);
        }
    }
    
    private int[] cal(int[] rate) {
        int[] answer = new int[2];
        
        for (int[] user : users) {
            double buy = 0;
            boolean plus = false;
            
            for (int i = 0; i < emoticons.length; i++) {
                if (rate[i] >= user[0]) {
                    buy += emoticons[i] * ((100 - rate[i]) * 0.01);
                }
                
                if (buy >= user[1]) {
                    plus = true;
                    break;
                }
            }
            
            if (plus) {
                answer[0] += 1;
            } else {
                answer[1] += (int) buy;
            }
        }
        
        return answer;
    }
}