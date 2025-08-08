import java.util.*;

class Solution {
    public int solution(int[][] board) {
        int answer = Integer.MAX_VALUE;
        
        int tY = board.length;
        int tX = board[0].length;
        
        int[][] ds = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};
        
        int[][][] cost = new int[tY][tX][4];
        for (int[][] arr2 : cost) {
            for (int[] arr : arr2) {
                Arrays.fill(arr, Integer.MAX_VALUE);
            }
        }
        
        Queue<int[]> q = new LinkedList<>();
        q.add(new int[]{0, 0, 0, 1});
        q.add(new int[]{0, 0, 0, 2});
        Arrays.fill(cost[0][0], 0);
        
        while (!q.isEmpty()) {
            int[] cur = q.poll();

            if (cur[0] == tY - 1 && cur[1] == tX - 1) {
                answer = Math.min(answer, cur[2]);
                continue;
            }
            
            for (int d = 0; d < 4; d++) {
                int nY = ds[d][0] + cur[0];
                int nX = ds[d][1] + cur[1];
                
                if (nY >= 0 && nY < tY && nX >= 0 && nX < tX
                   && board[nY][nX] == 0) {

                    int nC = cur[2] + (cur[3] == d ? 100 : 600);
                    
                    if (cost[nY][nX][d] > nC) {
                        cost[nY][nX][d] = nC;
                        q.add(new int[]{nY, nX, nC, d});
                    }       
                } 
            }
        } 
        
        return answer;
    }
}