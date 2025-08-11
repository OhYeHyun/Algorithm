import java.util.*;

class Solution {
    private List<Set<Integer>> keys = new ArrayList<>();
    
    public int solution(String[][] relation) {
        
        for (int n = 1; n <= relation[0].length; n++) {
            bfs(0, n, relation, new LinkedHashSet<>());
        }
        
        return keys.size();
    }
    
    private void bfs(int start, int n, String[][] relation, LinkedHashSet<Integer> cols) {
        if (cols.size() == n) {

            if (isMin(cols) && isUnique(relation, cols)) {
                keys.add(new HashSet<>(cols));
            }
        }
        
        for (int i = start; i < relation[0].length; i++) {
            cols.add(i);
            bfs(i + 1, n, relation, cols);
            cols.remove(i);
        }
    }
    
    private boolean isMin(Set<Integer> cols) {
        for (Set<Integer> key : keys) {

            if (cols.containsAll(key)) {
                return false;
            }
        }
        
        return true;
    }
    
    private boolean isUnique(String[][] relation, Set<Integer> cols) {
        Set<String> s = new HashSet<>();
        
        for (String[] r : relation) {
            String str = "";
            for (Integer c : cols) {
                str += "|" + r[c];
            }
            s.add(str);
        }
        
        if (s.size() == relation.length) {
            return true;
        }
        
        return false;
    }
}