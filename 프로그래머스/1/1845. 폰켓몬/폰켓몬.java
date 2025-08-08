import java.util.*;

class Solution {
    public int solution(int[] nums) {
        int answer = 0;
        
        HashSet<Integer> n = new HashSet<>();
        for (int num : nums) {
            n.add(num);
        }
                
        return n.size() >= nums.length / 2 ? nums.length / 2 : n.size();
    }
}