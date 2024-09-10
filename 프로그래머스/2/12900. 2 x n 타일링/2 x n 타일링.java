public class Solution {
    public int solution(int n) {
        int answer = 1;
        int first = 1;
        int second = 2;

        if (n == 1 || n == 2) return answer;

        for (int i = 3; i <= n; i++) {
            int temp = (first + second) % 1000000007;
            first = second;
            second = temp;
        }

        answer = second;

        return answer;
    }
}