import java.util.*;

class Solution {
    public long solution(int w, int h) {
        long total = (long) w * h;
        
        long gcd = getGCD(w, h);
        long unusable = w + h - gcd;
        
        return total - unusable;
    }

    private long getGCD(int a, int b) {
        while (b != 0) {
            int tmp = a % b;
            a = b;
            b = tmp;
        }
        return a;
    }
}