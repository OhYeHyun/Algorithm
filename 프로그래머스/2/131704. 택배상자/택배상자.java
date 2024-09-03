import java.util.*;

public class Solution {
    public int solution(int[] order) {
        int answer = 0;
        Stack<Integer> stack = new Stack<>();
        
        int originCur = 0;
        int orderCur = 0;
        
        while (orderCur < order.length) {
            int orderBox = order[orderCur];
            int originBox = originCur + 1;

            if (orderBox == originBox) {
                answer++;
                originCur++;
                orderCur++;
                continue;
            }
            if (!stack.isEmpty() && orderBox == stack.peek()) {
                stack.pop();
                answer++;
                orderCur++;
                continue;
            }
            
            if (!stack.isEmpty() && stack.peek() > orderBox) {
                return answer;
            } else {
                stack.push(originBox);
                originCur++;
            }
        }
        return answer;
    }
}