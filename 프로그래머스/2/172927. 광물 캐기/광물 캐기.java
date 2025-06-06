import java.util.*;

class Solution {
    public int solution(int[] picks, String[] minerals) {        
        int answer = Integer.MAX_VALUE;
        int[][] values = {{1, 1, 1}, {5, 1, 1}, {25, 5, 1}};
        
        Queue<int[]> q = new LinkedList<>();
        q.add(new int[]{picks[0], picks[1], picks[2], 0, 0});
        
        while(!q.isEmpty()) {
            int[] cur = q.poll();
            int[] ps = {cur[0], cur[1], cur[2]};
            int pos = cur[3];
            int ans = cur[4];

            if (pos >= minerals.length || (ps[0] == 0 && ps[1] == 0 && ps[2] == 0)) {
                answer = Math.min(answer, ans);
                continue;
            }
            
            for (int a = 0; a < 3; a++) {
                if (ps[a] <= 0) continue;

                int[] curPs = new int[]{ps[0], ps[1], ps[2]};
                int curAns = 0;
                int lastIdx = minerals.length - pos < 5 ? minerals.length : pos + 5;
                for (int b = pos; b < lastIdx; b++) {
                    String m = minerals[b];
                    
                    if (m.equals("diamond")) {
                        curAns += values[a][0];
                    }
                    if (m.equals("iron")) {
                        curAns += values[a][1];
                    }
                    if (m.equals("stone")) {
                        curAns += values[a][2];
                    }
                }

                curPs[a]--;
                q.add(new int[]{curPs[0], curPs[1], curPs[2], pos + 5, ans + curAns});
            }
            
        }
        
        return answer;
    }
}