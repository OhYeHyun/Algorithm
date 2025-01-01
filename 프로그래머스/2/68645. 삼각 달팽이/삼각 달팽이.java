import java.util.*;

class Solution {
    public int[] solution(int n) {        
        int num = 1;
        int maxNum = 0;
            
        int targetN = n;
        while (true) {
            if (targetN == 0) {
                break;
            }
            maxNum += targetN;
            targetN--;
        }
                        
        int[][] boxes = new int[n][n];
        for (int i = 0; i < n; i++) {
            Arrays.fill(boxes[i], 0);
        }
                        
        int[] dy = {1, 0, -1};
        int[] dx = {0, 1, -1}; 
        int idx = 0;
        
        int[] height = {0, n - 1};
        int[] width = {0, n - 1};
        
        int y = 0;
        int x = 0;
        
        while (num <= maxNum) {
            if (num == 1) {
                boxes[y][x] = num;
                num++;
                continue;
            }
            
            int curY = y + dy[idx];
            int curX = x + dx[idx];

            if (curY < height[0] || curY > height[1] || curX < width[0] || curX > width[1]) {
                idx++;
                
                if (idx == 2) {
                    height[0] += 1;
                    width[0] += 1;
                }

                if (idx == 3) {
                    idx = 0;
                    
                    height[0] += 1;
                    height[1] -= 1;
                    width[1] -= 2;
                }
                continue;
            }
            
            boxes[curY][curX] = num;
            y = curY;
            x = curX;
            num++;
        }
        
        int[] answer = new int[maxNum];
        int answerIdx = 0;
        for (int i = 0; i < n; i++) {
            for (int number : boxes[i]) {
                if (number != 0) {
                    answer[answerIdx++] = number;
                }
            }
        }
        
        return answer;
    }
}