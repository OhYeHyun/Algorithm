import java.util.*;

class Solution {
    public int[] solution(int[] sequence, int k) {
        int[] answer = new int[2];
        int[] prefix = new int[sequence.length + 1];
        int maxLength = Integer.MAX_VALUE;

        for (int i = 0; i < sequence.length; i++) {
            prefix[i + 1] = prefix[i] + sequence[i];
        }
        // sequence = [1, 2, 3, 4, 5] → prefix = [0, 1, 3, 6, 10, 15]

        int left = 0, right = 0;

        while (left <= right && right <= sequence.length) {
            int sum = prefix[right] - prefix[left];
            if (sum == k) {

                int curLength = right - left - 1;
                if (maxLength > curLength) {
                    answer[0] = left;
                    answer[1] = right - 1;
                    maxLength = curLength;
                }
            }
            
            if (sum < k) {
                right++;
            } else {
                left++;
            }
        }

        return answer;
    }
}
