import java.util.*;

class Solution {
    private int answer = 0;
    
    private int n;
    private int[][] q;
    private int[] ans;
    
    public int solution(int n, int[][] q, int[] ans) {
        this.n = n;
        this.q = q;
        this.ans = ans;
        
        dfs(0, new ArrayList<>());
        
        return answer;
    }
    
    private void dfs(int cur, List<Integer> target) {
        if (target.size() == 5) {
            boolean s = true;
            
            for (int i = 0; i < q.length; i++) {
                int targetC = (int) Arrays.stream((q[i])).filter(c -> target.contains(c)).count();
                
                if (targetC != ans[i]) {
                    s = false;
                    break;
                };
            }
            
            if (s) {
                answer++;
            }
            
        } else {
            for (int i = cur + 1; i <= n; i++) {
                target.add(i);
                dfs(i, target);
                target.remove(Integer.valueOf(i));
            }
        }
        
    }
}