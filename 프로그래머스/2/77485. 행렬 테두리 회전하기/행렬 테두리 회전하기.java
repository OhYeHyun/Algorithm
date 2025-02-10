import java.util.*;

class Solution {
    public int[] solution(int rows, int columns, int[][] queries) {
        int queryLen = queries.length;
        int[] answer = new int[queryLen];
        
        int[][] board = generateBoard(rows, columns);
        for (int i = 0; i < queryLen; i++) {
            int result = transform(queries[i], board);
            answer[i] = result;
        }
        
        return answer;
    }
    
    private int transform(int[] range, int[][] board) {        
        int fromY = range[0] - 1;
        int fromX = range[1] - 1;
        int toY = range[2] - 1;
        int toX = range[3] - 1;
        
        int[][] ds = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};  
        
        int[] cur = {fromY, fromX};
        int temp = board[fromY][fromX];
        int min = temp;

        for (int[] d : ds) {
            while (true) {
                int num = temp;
                int[] next = {cur[0] + d[0], cur[1] + d[1]};    
                if (next[0] >= fromY && next[0] <= toY && next[1] >= fromX && next[1] <= toX) {
                    min = Math.min(min, num);
                    temp = board[next[0]][next[1]];
                    board[next[0]][next[1]] = num;
                    cur[0] = next[0];
                    cur[1] = next[1];
                } else {
                    break;
                }
            }
        }
        
        return min;
    }
    
    private int[][] generateBoard(int rows, int columns) {
        int[][] board = new int[rows][columns];
        int num = 1;
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                board[i][j] = num++;
            }
        }
        return board;
    }
}