import java.util.*;

class Solution {
    public int solution(int[] cards) {
        List<Integer> answer = new ArrayList<>();
        int n = cards.length;
        
        boolean[] v = new boolean[n];
        
        for (int i = 0; i < n; i++) {            
            int idx = i;
            int r = 0;
            
            while (!v[idx]) {
                v[idx] = true;
                r++;
                idx = cards[idx] - 1;
            }
            
            if (r != 0) {
                answer.add(r);
            }
        }        
        
        Collections.sort(answer, Comparator.reverseOrder());
                
        return answer.size() == 1 ? 0 : answer.get(0) * answer.get(1);
    }
}