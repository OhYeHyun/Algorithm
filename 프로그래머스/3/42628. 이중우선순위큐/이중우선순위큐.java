import java.util.*;

class Solution {
    public int[] solution(String[] operations) {
        PriorityQueue<Integer> maxq = new PriorityQueue<>(Comparator.comparingInt(a -> -a));
        PriorityQueue<Integer> minq = new PriorityQueue<>(Comparator.comparingInt(a -> a));

        for (String o : operations) {
            if (o.startsWith("I ")) {
                int n = Integer.parseInt(o.substring(2));
                maxq.add(n);
                minq.add(n);
            } else if (o.startsWith("D 1")) {
                if (!maxq.isEmpty() && !minq.isEmpty()) {
                    int n = maxq.poll();
                    minq.remove(n);
                }
            } else if (o.startsWith("D -1")) {
                 if (!maxq.isEmpty() && !minq.isEmpty()) {
                     int n = minq.poll();
                     maxq.remove(n);
                 }
            }
        }
         
        return maxq.isEmpty() && minq.isEmpty() ? new int[]{0, 0} : new int[]{maxq.poll(), minq.poll()};
    }
}