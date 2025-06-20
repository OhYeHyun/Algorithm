import java.util.*;

class Solution {
    public int solution(int[] diffs, int[] times, long limit) {
        int left = 1;
        int right = Arrays.stream(diffs).max().getAsInt();
        
        int answer = 0;

        while (left <= right) {
            int level = (left + right) / 2;

            if (canPass(diffs, times, limit, level)) {
                answer = level;
                right = level - 1;
            } else {
                left = level + 1;
            }
        }

        return answer;
    }
    
    private boolean canPass(int[] diffs, int[] times, long limit, int level) {
        long total = times[0];

        for (int i = 1; i < diffs.length; i++) {
            if (diffs[i] > level) {
                total += (diffs[i] - level) * (times[i] + times[i - 1]);
            }
            
            total += times[i];

            if (total > limit) return false;
        }
        
        return true;
    }
}