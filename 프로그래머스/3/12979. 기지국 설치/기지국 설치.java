import java.util.*;

class Solution {
    public int solution(int n, int[] stations, int w) {
        int answer = 0;
        int to = 1;
        
        for (int s : stations) {
            int from = s - w;
            
            if (to < from) {
                answer += (from - to) / ((2 * w) + 1);
                if ((from - to) % ((2 * w) + 1) > 0) {
                    answer++;
                }
            }
            
            to = s + w + 1;
        }
        
        if (to <= n) {
            answer += (n - to + 1) / ((2 * w) + 1);
            if ((n - to + 1) % ((2 * w) + 1) > 0) {
                answer++;
            }
        }
        
        return answer;
    }
}