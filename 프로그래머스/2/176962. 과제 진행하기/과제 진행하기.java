import java.util.*;

class Solution {
    public String[] solution(String[][] plans) {
        List<String> complete = new ArrayList<>();
        Stack<String[]> stack = new Stack<>(); 
        
        Arrays.sort(plans, Comparator.comparing((String[] p) -> p[1]));

        for (int i = 0; i < plans.length; i++) {
            String[] p = plans[i];
            String[] t = p[1].split(":");
            int curTime = Integer.valueOf(t[0]) * 60 + Integer.valueOf(t[1]);
            
            int next = 24 * 60;
            if (i + 1 < plans.length) {
                String[] nT = plans[i + 1][1].split(":");
                next = Integer.valueOf(nT[0]) * 60 + Integer.valueOf(nT[1]);
            }
            
            if (next - curTime < Integer.valueOf(p[2])) {
                int remain = Integer.valueOf(p[2]) - (next - curTime);
                stack.add(new String[]{p[0], p[1], String.valueOf(remain)});
                
            } else {
                complete.add(p[0]);
                curTime += Integer.valueOf(p[2]);
                                
                while (!stack.isEmpty()) {
                    String[] stackP = stack.peek();
                    
                    if (next - curTime < Integer.valueOf(stackP[2])) {
                        stackP[2] = String.valueOf(Integer.valueOf(stackP[2]) - (next - curTime));
                        
                        break;
                    } else {
                        stack.pop();
                        curTime += Integer.valueOf(stackP[2]);
                        complete.add(stackP[0]);
                    }
                }
            }
        }
        
        while (!stack.isEmpty()) {
            complete.add(stack.pop()[0]);
        }

        return complete.toArray(String[]::new);
    }
}