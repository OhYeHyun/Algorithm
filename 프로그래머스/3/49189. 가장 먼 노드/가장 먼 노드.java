import java.util.*;

class Solution {
    public int solution(int n, int[][] edge) {
        Map<Integer, Set<Integer>> m = new HashMap<>();
        for (int[] e : edge) {
            m.computeIfAbsent(e[0], k -> new HashSet<>()).add(e[1]);
            m.computeIfAbsent(e[1], k -> new HashSet<>()).add(e[0]);
        }
        
        int[] d = new int[m.size() + 1];
        
        boolean[] v = new boolean[m.size() + 1];
        v[1] = true;
        
        Queue<Integer> q = new LinkedList<>();
        q.add(1);
        
        while (!q.isEmpty()) {
            Integer cur = q.poll();
            
            for (Integer a : m.get(cur)) {
                if (!v[a]) {
                    v[a] = true;
                    d[a] = d[cur] + 1;
                    q.add(a);
                }
            }
        }
        
        int max = Arrays.stream(d).max().getAsInt();
        int count = 0;
        for (int dd : d) {
            if (dd == max) count++;
        }

        return count;
    }
}