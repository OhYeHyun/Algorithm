import java.util.*;

class Solution {
    public int solution(int n, int k, int[] enemy) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        int round = 0;

        for (int e : enemy) {
            maxHeap.add(e);
            n -= e;

            if (n < 0) {
                if (k > 0) {
                    n += maxHeap.poll();
                    k--;
                } else {
                    break;
                }
            }
            round++;
        }

        return round;
    }
}