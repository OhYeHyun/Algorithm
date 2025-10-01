import java.util.*;

class Solution {
    public long solution(int n, int[] works) {
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());

        for (int w : works) {
            pq.offer(w);
        }

        while (n > 0 && !pq.isEmpty()) {
            int max = pq.poll();
            if (max == 0) break;
            pq.offer(max - 1);
            n--;
        }

        long answer = 0;
        while (!pq.isEmpty()) {
            int w = pq.poll();
            answer += (long) w * w;
        }

        return answer;
    }
}