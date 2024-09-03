import java.util.*;

public class Solution {
    public int solution(int[] order) {
        int answer = 0;
        Stack<Integer> stack = new Stack<>();
        
        int orderIdx = 0;
        
        for (int i = 0; i < order.length; i++) {
            stack.push(i + 1);
            
            while (!stack.isEmpty()) {
                if (stack.peek() == order[orderIdx]) {
                    stack.pop();
                    answer++;
                    orderIdx++;
                } else {
                    break;
                }
            }
        }
        return answer;
    }
}