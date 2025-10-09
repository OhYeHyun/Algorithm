import java.util.*;

class Solution {
    public int[] solution(String[] gems) {
        Set<String> allTypes = new HashSet<>(Arrays.asList(gems));
        Map<String, Integer> map = new HashMap<>();

        int start = 0;
        int end = 0;
        int[] answer = {1, gems.length};
        int minLength = gems.length + 1;

        while (true) {
            if (map.size() == allTypes.size()) {
                if (end - start < minLength) {
                    minLength = end - start;
                    answer[0] = start + 1;
                    answer[1] = end;
                }

                String leftGem = gems[start];
                map.put(leftGem, map.get(leftGem) - 1);
                if (map.get(leftGem) == 0) map.remove(leftGem);
                start++;
            }
            
            else if (end == gems.length) {
                break;
            }
            
            else {
                String rightGem = gems[end];
                map.put(rightGem, map.getOrDefault(rightGem, 0) + 1);
                end++;
            }
        }

        return answer;
    }
}