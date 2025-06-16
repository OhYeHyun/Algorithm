import java.math.BigInteger;

class Solution {
    public long solution(int w, int h) {
        long total = (long) w * h;
        
        long gcd = BigInteger.valueOf(w).gcd(BigInteger.valueOf(h)).longValue();
        long unusable = w + h - gcd;
        
        return total - unusable;
    }
}