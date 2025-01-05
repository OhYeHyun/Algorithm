import java.util.*;

class Solution {
    public long solution(int[] weights) {
        long answer = 0;
        
        double[] ratios = {1, (double) 4 / 3, (double) 3 / 2, 2};
        Map<Integer, Integer> targets = new HashMap<>(); 
        
        Arrays.sort(weights);
        for (int weight : weights) {
            if (targets.containsKey(weight)) {
                answer += targets.get(weight);
            }
            
            for (double ratio : ratios) {
                if (weight * ratio % 1 == 0.0) {
                    int value = (int) (weight * ratio);
                    targets.put(value, targets.getOrDefault(value, 0) + 1);
                }
            }
        }
        
        return answer;
    }
}