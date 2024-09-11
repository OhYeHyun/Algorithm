import java.util.*;

public class Solution {
    public int solution(int m, int n, String[] board) {
        int answer = 0;
        char[][] boardArr = new char[m][n];

        for (int i = 0; i < m; i++) {
            boardArr[i] = board[i].toCharArray();
        }

        while (true) {
            int[][] remove = new int[m][n];
            boolean found = false;

            for (int row = 1; row < m; row++) {
                for (int col = 1; col < n; col++) {
                    if (boardArr[row][col] == '_') continue;
                    
                    char cur = boardArr[row][col];
                    if (cur == boardArr[row - 1][col] && cur == boardArr[row][col - 1] 
                        && cur == boardArr[row - 1][col - 1]) {
                        remove[row][col] = remove[row - 1][col] 
                            = remove[row][col - 1] = remove[row - 1][col - 1] = 1;
                        found = true;
                    }
                }
            }

            if (!found) return answer;

            int removeCount = 0;
            for (int[] row : remove) {
                for (int cell : row) {
                    removeCount += cell;
                }
            }
            answer += removeCount;

            for (int col = 0; col < n; col++) {
                int writeIdx = m - 1;
                for (int row = m - 1; row >= 0; row--) {
                    if (remove[row][col] == 0) {
                        boardArr[writeIdx--][col] = boardArr[row][col];
                    }
                }
                for (int row = writeIdx; row >= 0; row--) {
                    boardArr[row][col] = '_';
                }
            }
        }
    }
}