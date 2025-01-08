import java.util.*;

class Solution {
    public String solution(int n) {
        String answer = "";
        
        int share = n;
        int remainder = -1;

        while (share != 0) {
            remainder = share % 3;
            share /= 3;

            if (remainder == 0) { 
                answer = "4" + answer;
                share--;
            } else {
                answer = Integer.toString(remainder) + answer;
            }
        }

        return answer;
    }
}