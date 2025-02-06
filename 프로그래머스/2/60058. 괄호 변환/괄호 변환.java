import java.util.*;

class Solution {
    public String solution(String p) {        
        return loop(p);
    }
    
    private String loop(String str) {
        String answer = "";
        
        if (str.equals("")) {
            return "";
        }
        
        String[] divided = divide(str);
        if (isCorrect(divided[0])) {
            answer = divided[0];
            answer += loop(divided[1]);
        } else {        
            answer += incorrect(divided[0], divided[1]);
        }        

        return answer;
    }
    
    private String incorrect(String main, String sub) {
        String s = main.substring(1, main.length() - 1);   
        return "(" + loop(sub) + ")" + reverse(s);
    }
    
    private String reverse(String str) {
        
        String result = str.replace("(", "O");
        result = result.replace(")", "(");
        return result.replace("O", ")");
    }
    
    private String[] divide(String str) {
        Deque<String> q = new ArrayDeque<>();
        Collections.addAll(q, str.split(""));
        
        int state = 0;
        int idx = 1;
        
        while (!q.isEmpty()) {
            String s = q.pollFirst();

            if (s.equals("(")) {
                state++;
            }
            if (s.equals(")")) {
                state--;
            }
            if (state == 0) {
                return new String[]{str.substring(0, idx), str.substring(idx)};
            }
            
            idx++;
        }
        return new String[]{str, ""};
    }
                
    private boolean isCorrect(String str) {
        Deque<String> q = new ArrayDeque<>();
        Collections.addAll(q, str.split(""));
        
        int state = 0;        
        while (!q.isEmpty()) {
            String s = q.pollFirst();

            if (s.equals("(")) {
                state++;
            }
            if (s.equals(")")) {
                state--;
            }
            
            if (state < 0) {
                return false;
            }
        }
        return true;
    }
}