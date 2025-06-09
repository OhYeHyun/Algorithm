import java.util.*;
import java.util.stream.Collectors;

class Solution {
    public int solution(String s) {
        int answer = s.length();
        int maxLen = s.length() / 2;
        
        for (int i = 1; i <= maxLen; i++) {
            List<Character> temp = new ArrayList<>();
            
            int curAns = s.length();
            int count = 0;
            
            for (int j = 0; j < s.length(); j++) {

                if (temp.size() == i) {
                    String tempStr = temp.stream().map(String::valueOf).collect(Collectors.joining());
                    
                    if ((j + i - 1) < s.length() && s.substring(j, j + i).equals(tempStr)) {
                        count++;
                        j += i - 1;
                    } else {
                        curAns -= count * i;
                        if (count > 0) {
                            curAns += String.valueOf(count + 1).length();
                        }
                        count = 0;
                        temp.clear();
                        temp.add(s.charAt(j));
                    }
                } else if (temp.size() < i + 1) {
                    temp.add(s.charAt(j));
                }
                
            }
            curAns -= count * i;
            if (count > 0) {
                curAns += String.valueOf(count + 1).length();
            }
            
            answer = Math.min(answer, curAns);
        }
        
        return answer;
    }
}