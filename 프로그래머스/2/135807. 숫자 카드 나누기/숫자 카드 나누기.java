import java.util.*;

class Solution {
       public int solution(int[] arrayA, int[] arrayB) {
        Arrays.sort(arrayA);
        Arrays.sort(arrayB);

        int minA = arrayA[0];
        int minB = arrayB[0];

        int answerA = findMaxDivisor(minA, arrayA, arrayB);
        int answerB = findMaxDivisor(minB, arrayB, arrayA);

        return Math.max(answerA, answerB);
    }

    private int findMaxDivisor(int min, int[] main, int[] sub) {
        int maxDivisor = 0;

        for (int i = 1; i <= Math.sqrt(min); i++) {
            int pair = min / i;

            if (min % i == 0) {
                if (isValidDivisor(i, main, sub)) {
                    maxDivisor = Math.max(maxDivisor, i);
                }

                if (isValidDivisor(pair, main, sub)) {
                    maxDivisor = Math.max(maxDivisor, pair);
                }
            }
        }
        return maxDivisor;
    }

    private boolean isValidDivisor(int divisor, int[] main, int[] sub) {
        for (int num : main) {
            if (num % divisor != 0) {
                return false;
            }
        }

        for (int num : sub) {
            if (num % divisor == 0) {
                return false;
            }
        }
        return true;
    }
}