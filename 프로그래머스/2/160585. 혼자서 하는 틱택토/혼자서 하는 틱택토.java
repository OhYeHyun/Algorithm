import java.util.*;

class Solution {
    private char[][] boards = new char[3][3];
    
    public int solution(String[] board) {
        for (int i = 0; i < 3; i++) {
            boards[i] = board[i].toCharArray();
        }
        
        int co = countN('O');
        int cx = countN('X');
        
        if (!(co == cx || co == cx + 1)) return 0;
        
        boolean o = success('O');
        boolean x = success('X');
        
        if (o && x) return 0;
        if (o && co != cx + 1) return 0;
        if (x && co != cx) return 0;
        
        return 1;
    }
    
    private boolean success(char target) {
        for (int i = 0; i < 3; i++) {
            if (boards[i][0] == target &&
               boards[i][1] == target &&
               boards[i][2] == target) return true;
            
            if (boards[0][i] == target &&
               boards[1][i] == target &&
               boards[2][i] == target) return true;
        }
        
        if (boards[0][0] == target &&
           boards[1][1] == target &&
           boards[2][2] == target) return true;
        
        if (boards[0][2] == target &&
           boards[1][1] == target &&
           boards[2][0] == target) return true;
        
        return false;
    }
    
    private int countN(char target) {
        int count = 0;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (boards[i][j] == target) {
                    count++;
                }
            }
        }
        
        return count;
    }
}