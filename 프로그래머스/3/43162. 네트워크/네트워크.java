import java.util.*;

class Solution {
    private int[][] computers;
    private int n;
    private boolean[] v;
    private int answer = 0;
    
    public int solution(int n, int[][] computers) {
        this.n = n;
        this.computers = computers;        
        this.v = new boolean[n];
        
        for (int i = 0; i < n; i++) {
            if (v[i]) continue;
            dfs(i);
            answer++;
        }
        
        for (boolean vv : v) {
            if (!vv) answer++;
        }
        
        return answer;
    }
    
    private void dfs(int cur) {    
        v[cur] = true;
        
        for (int i = 0; i < n; i++) {
            if (cur == i) continue;
            
            if (computers[cur][i] == 1 && !v[i]) {
                dfs(i);
            }
        }
    }
}