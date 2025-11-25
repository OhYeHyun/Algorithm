import java.util.*;

class Solution {
    int[] parent;
    
    public int solution(int n, int[][] costs) {
        parent = new int[n];
        for (int i = 0; i < n; i++) parent[i] = i;
        
        Arrays.sort(costs, (a, b) -> a[2] - b[2]);
        
        int answer = 0;
        int count = 0;
        
        for (int[] c : costs) {
            int a = c[0];
            int b = c[1];
            int cost = c[2];
            
            if (find(a) != find(b)) {
                union(a, b);
                answer += cost;
                count++;
                
                if (count == n - 1) break;
            }
        }
        
        return answer;
    }
    
    private int find(int x) {
        if (parent[x] == x) return x;
        return parent[x] = find(parent[x]);
    }
    
    private void union(int a, int b) {
        a = find(a);
        b = find(b);
        if (a != b) parent[b] = a;
    }
}
