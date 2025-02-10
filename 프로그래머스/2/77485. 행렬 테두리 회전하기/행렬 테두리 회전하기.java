import java.util.*;

class Solution {
    public int[] solution(int rows, int columns, int[][] queries) {
        int queryLen = queries.length;
        int[] answer = new int[queryLen];
        
        int[][] board = generateBoard(rows, columns);
        for (int i = 0; i < queryLen; i++) {
            answer[i] = transform(queries[i], board);
        }
        
        return answer;
    }
    
    private int transform(int[] range, int[][] board) {        
        int fromY = range[0] - 1;
        int fromX = range[1] - 1;
        int toY = range[2] - 1;
        int toX = range[3] - 1;
        
        int[] dy = {0, 1, 0, -1};
        int[] dx = {1, 0, -1, 0};
        
        int temp = board[fromY][fromX];
        int min = temp;
        int curY = fromY;
        int curX = fromX;
        
        for (int d = 0; d < 4; d++) {
            while (true) {
                int num = temp;
                int nextY = curY + dy[d];
                int nextX = curX + dx[d];

                if (nextY < fromY || nextY > toY || nextX < fromX || nextX > toX) {
                    break;
                }

                temp = board[nextY][nextX];
                board[nextY][nextX] = num;
                min = Math.min(min, board[nextY][nextX]);

                curY = nextY;
                curX = nextX;
            }
        }
        
        return min;
    }
    
    private int[][] generateBoard(int rows, int columns) {
        int[][] board = new int[rows][columns];
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                board[i][j] = i * columns + j + 1;
            }
        }
        return board;
    }
}