import java.util.*;

class Solution {
    public int[] solution(String[] maps) {
        List<Integer> answer = new ArrayList<>();
        
        while (existStart(maps)) {
            int[] start = findStart(maps);
            answer.add(calculateIsland(maps, start));
        }
        
        if (answer.size() == 0) {
            answer.add(-1);
        }

        return answer.stream().mapToInt(i -> i).sorted().toArray();
    }
    
    private int calculateIsland(String[] maps, int[] start) {
        List<Integer[]> islands = new ArrayList<>();
        
        int row = maps.length;
        int col = maps[0].length();
        
        Queue<Integer[]> q = new LinkedList<>();
        q.add(new Integer[]{start[0], start[1]});
        
        int[][] d = {{1, 0}, {0, 1}, {0, -1}, {-1, 0}};
        boolean[][] visited = new boolean[row][col];
        visited[start[0]][start[1]] = true;
        
        int sum = 0;
        
        while (!q.isEmpty()) {
            Integer[] curPosition = q.poll();
            islands.add(curPosition);
            
            int y = curPosition[0];
            int x = curPosition[1];
            
            char curChar = maps[y].charAt(x);
            sum += Character.getNumericValue(curChar);
            
            for (int[] dd : d) {
                int newY = y + dd[0];
                int newX = x + dd[1];
                
                if (newY >= 0 && newY < row && newX >= 0 && newX < col 
                    && maps[newY].charAt(newX) != 'X' && !visited[newY][newX]) {
                    q.add(new Integer[]{newY, newX});
                    visited[newY][newX] = true;
                }
            }
        }
        updateMaps(maps, islands);
                
        return sum;
    }
    
    private void updateMaps(String[] maps, List<Integer[]> islands) {
        for (Integer[] island : islands) {
            int y = island[0];
            int x = island[1];
            
            maps[y] = maps[y].substring(0, x) + "X" + maps[y].substring(x + 1);
        }
    }
    
    private int[] findStart(String[] maps) {
        int row = maps.length;
        int col = maps[0].length();
        
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                char cur = maps[i].charAt(j);
                if (cur != 'X') {
                    return new int[]{i, j};
                }
            }
        }
        return new int[]{0, 0};
    }
    
    private boolean existStart(String[] maps) {
        for (int i = 0; i < maps.length; i++) {
            if (maps[i].replace("X", "").length() != 0) {
                return true;
            }
        }
        return false;
    }
}