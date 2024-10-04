import java.util.*;

public class Solution {
    public static int solution(int[] queue1, int[] queue2) {
        int score = 0;
        int total = queue1.length * 3 - 1;

        for (int i = 0; i < queue1.length; i++) {
            score += (queue1[i] + queue2[i]);
        }
        
        if (score % 2 == 1) return -1;
        score /= 2;

        int enCount = 0;
        int deCount = 0;
        int sumQ1 = Arrays.stream(queue1).sum();

        Queue<Integer> q1 = new LinkedList<>();
        Queue<Integer> q2 = new LinkedList<>();

        for (int i : queue1) q1.add(i);
        for (int i : queue2) q2.add(i);

        while (enCount + deCount < total) {
            if (sumQ1 > score) {
                int value = q1.poll();
                q2.add(value);
                deCount++;
                sumQ1 -= value;
            } else if (sumQ1 < score) {
                int value = q2.poll();
                q1.add(value);
                enCount++;
                sumQ1 += value;
            } else {
                // sumQ1 == score
                int sumQ2 = q2.stream().mapToInt(Integer::intValue).sum(); 
                return sumQ2 == score ? enCount + deCount : -1;
            }
        }

        return -1;
    }
}