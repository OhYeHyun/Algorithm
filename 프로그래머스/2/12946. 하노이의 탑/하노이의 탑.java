import java.util.*;

class Solution {
    List<int[]> list = new ArrayList<>();
    
    public int[][] solution(int n) {
        hanoi(n, 1, 2, 3);
        return list.toArray(int[][]::new);
    }

    private void hanoi(int n, int from, int by, int to) {
        if (n == 1) {
            list.add(new int[]{from, to});
            return;
        }

        hanoi(n - 1, from, to, by); 
        list.add(new int[]{from, to}); 
        hanoi(n - 1, by, from, to);
    }
}