import java.util.*;

class Solution {
    public int solution(String[] board) {
        String[][] newBoard = initBoard(board);
        int[] start = startPosition(newBoard);
                
        return process(newBoard, start);
    }
    
    private int process(String[][] board, int[] start) {
        int row = board.length;
        int col = board[0].length;
        
        int answer = 0;
        Queue<int[]> q = new LinkedList<>();
        q.add(new int[]{start[0], start[1], answer});
        
        int[][] ds = {{0, 1}, {-1, 0}, {1, 0}, {0, -1}};
        boolean[][] v = new boolean[row][col];
        v[start[0]][start[1]] = true;
        
        while (!q.isEmpty()) {
            int[] cur = q.poll();
            
            if (board[cur[0]][cur[1]].equals("G")) {
                return cur[2];
            }
            
            for (int[] d : ds) {
                int[] next = new int[]{cur[0], cur[1]};

                while (true) {
                    next[0] += d[0];
                    next[1] += d[1];
                    
                    if (next[0] < 0 || next[0] >= row || next[1] < 0 || next[1] >= col 
                        || board[next[0]][next[1]].equals("D")) {
                        next[0] -= d[0];
                        next[1] -= d[1];
                        break;
                    }
                 }
                
                if ((cur[0] != next[0] || cur[1] != next[1]) && !v[next[0]][next[1]]) {
                    v[next[0]][next[1]] = true;
                    q.add(new int[]{next[0], next[1], cur[2] + 1});
                }
            }
        }
        return -1;
    }
    
    private int[] startPosition(String[][] board) {
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[i].length; j++) {
                if (board[i][j].equals("R")) {
                    return new int[]{i, j};
                }
            }
        }
        return new int[]{0, 0};
    }
    
    private String[][] initBoard(String[] board) {
        String[][] newBoard = new String[board.length][];
        
        for (int i = 0; i < board.length; i++) {
            newBoard[i] = board[i].split("");
        }

        return newBoard;
    }
}