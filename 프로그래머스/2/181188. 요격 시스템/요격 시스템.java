import java.util.*;

class Solution {
    public int solution(int[][] targets) {       
        Arrays.sort(targets, Comparator.comparingInt((int[] t) -> t[1]));
        
        int count = 0;
        int lastEnd = -1;
        
        for (int[] t : targets) {
            if (t[0] >= lastEnd) {
                count++;
                lastEnd = t[1];
            }
        }
        
        return count;
    }
}