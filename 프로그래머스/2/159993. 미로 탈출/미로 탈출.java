import java.util.*;

class Solution {
    public int solution(String[] maps) {
        int rows = maps.length;
        int cols = maps[0].length();
        
        int[] startInfo = findStart(rows, cols, maps);
        int[] leverInfo = findTarget(rows, cols, maps, "L", startInfo);
        int[] exitInfo = findTarget(rows, cols, maps, "E", leverInfo);
        
        return exitInfo[2];
    }

    private int[] findStart(int rows, int cols, String[] maps) {
        for (int i = 0; i < rows; i++) {
            if (maps[i].contains("S")) {
                int idx = maps[i].indexOf("S");
                return new int[]{i, idx, 0};
            }
        }
        return new int[]{0, 0, -1};
    }

    private int[] findTarget(int rows, int cols, String[] maps, String target, int[] start) {
        if (start[2] == -1) {
            return new int[]{0, 0, -1};
        }
        
        int[] dy = {-1, 1, 0, 0};
        int[] dx = {0, 0, -1, 1};
        boolean[][] visited = new boolean[rows][cols];

        Queue<int[]> queue = new LinkedList<>();
        queue.add(start);
        visited[start[0]][start[1]] = true;

        while (!queue.isEmpty()) {
            int[] current = queue.poll();

            if (maps[current[0]].charAt(current[1]) == target.charAt(0)) {
                return new int[]{current[0], current[1], current[2]};
            }

            for (int i = 0; i < 4; i++) {
                int newY = current[0] + dy[i];
                int newX = current[1] + dx[i];

                if (newY >= 0 && newY < rows && newX >= 0 && newX < cols
                    && !visited[newY][newX] && maps[newY].charAt(newX) != 'X') {
                    visited[newY][newX] = true;
                    queue.add(new int[]{newY, newX, current[2] + 1});
                }
            }
        }
        return new int[]{0, 0, -1};
    }
}