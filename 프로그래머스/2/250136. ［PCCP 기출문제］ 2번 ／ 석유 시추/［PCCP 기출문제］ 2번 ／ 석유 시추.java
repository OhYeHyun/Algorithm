import java.util.*;

class Solution {
    private int[][] land;
    private int y, x;
    private int[][] ds = {{0, 1}, {1, 0}, {-1, 0}, {0, -1}};
    private Map<Integer, Integer> areaSize = new HashMap<>();
    
    public int solution(int[][] land) {
        this.land = land;
        this.y = land.length;
        this.x = land[0].length;
        
        int id = 2;
        for (int i = 0; i < y; i++) {
            for (int j = 0; j < x; j++) {
                if (land[i][j] == 1) {
                    int size = bfs(i, j, id);
                    areaSize.put(id, size);
                    id++;
                }
            }
        }
        
        int answer = 0;
        for (int col = 0; col < x; col++) {
            Set<Integer> s = new HashSet<>();
            
            int sum = 0;
            for (int row = 0; row < y; row++) {
                int areaId = land[row][col];
                if (areaId > 1 && !s.contains(areaId)) {
                    sum += areaSize.get(areaId);
                    s.add(areaId);
                }
            }
            answer = Math.max(answer, sum);
        }
        return answer;
    }
    
    private int bfs(int sy, int sx, int id) {
        Queue<int[]> q = new LinkedList<>();
        q.add(new int[]{sy, sx});
        land[sy][sx] = id;
        int count = 1;
        
        while (!q.isEmpty()) {
            int[] cur = q.poll();
            
            for (int[] d : ds) {
                int ny = cur[0] + d[0];
                int nx = cur[1] + d[1];
                
                if (ny >= 0 && ny < y && nx >= 0 && nx < x && land[ny][nx] == 1) {
                    land[ny][nx] = id;
                    q.add(new int[]{ny, nx});
                    count++;
                }
            }
        }
        return count;
    }
}