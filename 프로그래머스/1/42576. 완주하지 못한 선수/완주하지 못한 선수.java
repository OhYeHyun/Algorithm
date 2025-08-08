import java.util.*;

class Solution {
    public String solution(String[] participant, String[] completion) {    
        Map<String, Integer> m = new HashMap<>();

        for (String c : completion) {
            m.put(c, m.getOrDefault(c, 0) - 1);
        }

        for (String p : participant) {
            m.put(p, m.getOrDefault(p, 0) + 1);
        }

        for (Map.Entry<String, Integer> entry : m.entrySet()) {
            if (entry.getValue() > 0) {
                return entry.getKey();
            }
        }

        return "";
    }
}