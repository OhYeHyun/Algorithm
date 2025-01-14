import java.util.*;

class Solution {
    public int solution(int N, int[][] road, int K) {
        int[] distance = new int[N + 1];
        Arrays.fill(distance, Integer.MAX_VALUE);
        distance[1] = 0;
        
        List<int[]>[] graph = new ArrayList[N + 1];
        
        for (int i = 1; i <= N; i++) {
            graph[i] = new ArrayList<>();
        }
        
        for (int[] r : road) {
            graph[r[0]].add(new int[]{r[1], r[2]});
            graph[r[1]].add(new int[]{r[0], r[2]});
        }
        
        PriorityQueue<int[]> queue = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
        queue.add(new int[]{1, 0});
        
        while (!queue.isEmpty()) {
            int[] cur = queue.poll();
            int curNode = cur[0];
            int curCost = cur[1];
            
            if (curCost > distance[curNode]) continue;
            
            for (int[] next : graph[curNode]) {
                int nextNode = next[0];
                int nextCost = next[1];
                
                if (distance[nextNode] > curCost + nextCost) {
                    distance[nextNode] = curCost + nextCost;
                    queue.add(new int[]{nextNode, distance[nextNode]});
                }
            }
        }
        
        int answer = (int) Arrays.stream(distance)
            .filter(d -> d <= K)
            .count();
        
        return answer;
    }
}