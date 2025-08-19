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
        
        dfs(0, new HashSet<>());
        
        return answer;
    }
    
    private void dfs(int cur, Set<Integer> target) {
        if (target.size() == 5) {
            boolean s = true;
            
            for (int i = 0; i < q.length; i++) {
                int count = 0;
                
                for (int c : q[i]) {
                    if (target.contains(c)) count++;
                }
                
                if (count != ans[i]) {
                    s = false;
                    break;
                };
            }
            
            if (s) {
                answer++;
            }
            
            return;
        } 
        
        for (int i = cur + 1; i <= n; i++) {
            target.add(i);
            dfs(i, target);
            target.remove(i);
        }
        
    }
}