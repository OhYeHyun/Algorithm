class Solution {
    public int solution(int[] money) {
        int n = money.length;
        if (n == 1) return money[0];

        int max1 = rob(money, 0, n - 2);
        int max2 = rob(money, 1, n - 1);

        return Math.max(max1, max2);
    }

    private int rob(int[] money, int start, int end) {
        int n = end - start + 1;
        int[] dp = new int[n];
        
        dp[0] = money[start];
        if (n > 1) dp[1] = Math.max(money[start], money[start + 1]);

        for (int i = 2; i < n; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + money[start + i]);
        }

        return dp[n - 1];
    }
}