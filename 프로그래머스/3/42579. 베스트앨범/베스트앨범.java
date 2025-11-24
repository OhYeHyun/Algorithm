import java.util.*;

class Solution {
    public int[] solution(String[] genres, int[] plays) {
        List<Integer> answer = new ArrayList<>();
        
        Map<String, Integer> m = new HashMap<>();
        Map<String, PriorityQueue<int[]>> o = new HashMap<>();
        
        for (int i = 0; i < plays.length; i++) {
            m.put(genres[i], m.getOrDefault(genres[i], 0) + plays[i]);            
            
             PriorityQueue<int[]> pq = o.getOrDefault(
                genres[i],
                new PriorityQueue<>((a, b) -> {
                    if (b[0] != a[0]) return b[0] - a[0];
                    return a[1] - b[1];
                })
            );

            pq.add(new int[]{plays[i], i});
            o.put(genres[i], pq);
        }
        
        List<String> genresOrder = new ArrayList<>(m.keySet());
        genresOrder.sort((a, b) -> m.get(b) - m.get(a));
                
        for (String g : genresOrder) {
            PriorityQueue<int[]> q = o.get(g);
            
            if (!q.isEmpty()) {
                int[] first = q.poll();
                answer.add(first[1]);
            }

            if (!q.isEmpty()) {
                int[] second = q.poll();
                answer.add(second[1]);
            }
        }
        
        return answer.stream().mapToInt(i -> i).toArray();
    }
}