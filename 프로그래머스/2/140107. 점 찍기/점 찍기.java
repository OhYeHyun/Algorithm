class Solution {
    public long solution(int k, int d) {
        long answer = 0;
        long dd = (long) d * d;
        
        for (int x = 0; x <= d; x += k) {
            long maxY = (long) Math.sqrt(dd - (long) x * x);
            answer += (maxY / k) + 1;
        }
                
        return answer;
    }
}