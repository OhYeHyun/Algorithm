class Solution {
    public int[] solution(int[] sequence, int k) {
        int[] result = new int[2];
        int left = 0;
        int right = 0;
        int sum = 0;
        int minLength = Integer.MAX_VALUE;

        while (right < sequence.length) {
            sum += sequence[right];

            while (sum >= k) {
                if (sum == k && (right - left) < minLength) {
                    minLength = right - left;
                    result[0] = left;
                    result[1] = right;
                }
                sum -= sequence[left];
                left++;
            }
            right++;
        }

        return result;
    }
}