import java.util.*;

class Solution {
    public int solution(int n, int[][] edge) {
        Map<Integer, Set<Integer>> map = new HashMap<>();
        for (int[] e : edge) {
            map.computeIfAbsent(e[0], k -> new HashSet<>()).add(e[1]);
            map.computeIfAbsent(e[1], k -> new HashSet<>()).add(e[0]);
        }
        
        int[] distance = new int[n + 1];
        
        boolean[] visited = new boolean[n + 1];
        visited[1] = true;
        
        Queue<Integer> q = new LinkedList<>();
        q.add(1);
        
        while (!q.isEmpty()) {
            Integer cur = q.poll();
            
            for (Integer a : map.get(cur)) {
                if (!visited[a]) {
                    visited[a] = true;
                    distance[a] = distance[cur] + 1;
                    q.add(a);
                }
            }
        }
        
        int max = Arrays.stream(distance).max().getAsInt();
        int count = 0;
        for (int d : distance) {
            if (d == max) count++;
        }

        return count;
    }
}