import java.util.*;

class Solution {
    public int[] solution(int[] array, int[][] commands) {
        List<Integer> answer = new ArrayList<>();
                
        for (int[] c : commands) {
            int start = c[0];
            int end = c[1];
            int idx = c[2] - 1;
            
            int[] sub = Arrays.copyOfRange(array, start - 1, end);
            
            Arrays.sort(sub);
            answer.add(sub[idx]);
        }
        
        return answer.stream().mapToInt(Integer::intValue).toArray();
    }
}