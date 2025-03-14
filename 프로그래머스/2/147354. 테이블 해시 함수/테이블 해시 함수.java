import java.util.*;

class Solution {
    public int solution(int[][] data, int col, int row_begin, int row_end) {     
        int answer = 0;
        
        Arrays.sort(data, new Comparator<int[]>() {

            @Override
            public int compare(int[] d1, int[] d2) {
                int target = col - 1;

                if (d1[target] == d2[target]) {
                    return d2[0] - d1[0];
                } else {
                    return d1[target] - d2[target];
                }
            }
        });
        
        
        for (int i = row_begin - 1; i < row_end; i++) {
            int sum = 0;
            for (int a : data[i]) {
                sum += a % (i + 1);
            }
            answer ^= sum;
        }
                
        return answer;
    }
}