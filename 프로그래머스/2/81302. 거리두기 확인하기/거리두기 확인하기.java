import java.util.*;

class Solution {
    public int[] solution(String[][] places) {
        List<Integer> answer = new ArrayList<>();

        for (String[] place : places) {
            if (processPlace(place)) {
                answer.add(1);
            } else {
                answer.add(0);
            }
        }

        return answer.stream().mapToInt(i -> i).toArray();
    }
    
    private boolean processPlace(String[] place) {
        List<int[]> starts = findP(place);

        while (!starts.isEmpty()) {          
            int[] start = starts.get(0);
            starts.remove(0);

            boolean[][] visited = new boolean[5][5];
            visited[start[0]][start[1]] = true;
            int[][] dirs = {{0, 1}, {1, 0}, {-1, 0}, {0, -1}};
            
            Queue<int[]> q = new LinkedList<>();
            q.add(new int[]{0, start[0], start[1]});
            
            while (!q.isEmpty()) {
                int[] curQ = q.remove();
                int distance = curQ[0];
                int y = curQ[1];
                int x = curQ[2];
                
                if ((distance == 1 || distance == 2) && place[y].charAt(x) == 'P') {
                    return false;
                }
                if (distance >= 2) {
                    continue;
                }
                
                for (int[] dir : dirs) {
                    int[] next = {y + dir[0], x + dir[1]};
                
                    if (next[0] >= 0 && next[0] < 5 && next[1] >= 0 && next[1] < 5 &&
                        !visited[next[0]][next[1]] && place[next[0]].charAt(next[1]) != 'X') {
                        
                        visited[next[0]][next[1]] = true;
                        q.add(new int[]{distance + 1, next[0], next[1]});
                    }
                }
                System.out.println();
            }

        }

        return true;
    }
    
    private List<int[]> findP(String[] place) {
        List<int[]> starts = new ArrayList<>();
        
        for (int i = 0; i < 5; i++) {
            String[] target = place[i].split("");
            
            for (int j = 0; j < 5; j++) {
                if ("P".equals(target[j])) {
                    starts.add(new int[]{i, j});
                }
            }
        }
        return starts;
    }
}