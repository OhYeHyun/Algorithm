import java.util.*;

class Solution {
    public int solution(int[] A, int[] B) {
        int answer = 0;
        int len = A.length;
        
        Arrays.sort(A);
        Arrays.sort(B);
        
        int idx = len - 1;
        for (int i = len - 1; i >= 0; i--) {
            if (A[i] < B[idx]) {
                answer++;
                idx--;
            }
        }

        return answer;
    }
}