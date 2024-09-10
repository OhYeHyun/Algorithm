public class Solution {
    public int solution(int n) {
        if (n == 1) return 1;
        if (n == 2) return 2;
        
        int first = 1;
        int second = 2;

        for (int i = 3; i <= n; i++) {
            int temp = (first + second) % 1000000007;
            first = second;
            second = temp;
        }

        return second;
    }
}