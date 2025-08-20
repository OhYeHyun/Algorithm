import java.util.*;

class Solution {
    private int n;
    private int[] board;
    private int answer;
    
    public int solution(int n) {
        board = new int[n];
        this.n = n;
    
        dfs(0);
        
        return answer;
    }
    
    private void dfs(int depth) {
        if (depth == n) {
            answer++;
            return;
        }

        for (int i = 0; i < n; i++) {
            board[depth] = i;
            
            if (valid(depth)) {
                dfs(depth + 1);
            }
        }
        
    }
    
    private boolean valid(int depth) {
        for (int i = 0; i < depth; i++) {
            if (board[i] == board[depth]) return false;
            if (Math.abs(depth - i) == Math.abs(board[depth] - board[i])) return false;
        }
        return true;
    }
}