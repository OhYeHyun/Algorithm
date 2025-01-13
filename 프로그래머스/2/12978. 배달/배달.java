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

        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
        pq.add(new int[]{1, 0});

        while (!pq.isEmpty()) {
            int[] current = pq.poll();
            int node = current[0];
            int dist = current[1];

            if (dist > distance[node]) continue;

            for (int[] neighbor : graph[node]) {
                int nextNode = neighbor[0];
                int cost = neighbor[1];
                if (distance[nextNode] > distance[node] + cost) {
                    distance[nextNode] = distance[node] + cost;
                    pq.add(new int[]{nextNode, distance[nextNode]});
                }
            }
        }

        int answer = 0;
        for (int d : distance) {
            if (d <= K) answer++;
        }
        return answer;
    }
}