import java.util.*;

class Solution {
    public int solution(int[][] maps) {
        int targetY = maps.length;
        int targetX = maps[0].length;
        
        Queue<int[]> q = new LinkedList<>();
        boolean[][] v = new boolean[targetY][targetX];
        q.add(new int[]{0, 0, 1});
        v[0][0] = true;
        
        int[][] ps = {{0, 1}, {1, 0}, {-1, 0}, {0, -1}};
        
        while (!q.isEmpty()) {
            int[] cur = q.poll();
            
            if (cur[0] == targetY - 1 && cur[1] == targetX - 1) {
                return cur[2];
            }
            
            for (int[] p : ps) {
                int nY = p[0] + cur[0];
                int nX = p[1] + cur[1];
                
                if (nY >= 0 && nY < targetY && nX >= 0 && nX < targetX && 
                   maps[nY][nX] == 1 && !v[nY][nX]) {
                    
                    v[nY][nX] = true;
                    q.add(new int[]{nY, nX, cur[2] + 1});
                }
            }
        }
        
        return -1;
    }
}