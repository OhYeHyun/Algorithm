import java.util.*;
class Solution {
    public double solution(int[] arr) {
        double answer = 0;
        
        answer = Arrays.stream(arr).reduce(0, (acc, cur) -> acc + cur);
                
        return answer / arr.length;
    }
}