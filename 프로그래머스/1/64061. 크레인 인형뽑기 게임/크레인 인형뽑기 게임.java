import java.util.*;

class Solution {
    public int solution(int[][] board, int[] moves) {
        int answer = 0;
        Stack<Integer> s = new Stack<>();
        
        for (int m : moves) {
            for (int i = 0; i < board.length; i++) {
                
                if (board[i][m - 1] != 0) {
                    
                    int target = board[i][m - 1];
                    if (!s.empty() && s.peek() == target) {
                        s.pop();
                        answer++;
                    } else {
                        s.push(board[i][m - 1]);
                    }
                    
                    board[i][m - 1] = 0;
                    break;
                }
            }
        }
        
        return answer * 2;
    }
}