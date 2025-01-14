import java.util.*;

class Solution {
    public String[] solution(String[] orders, int[] course) {
        Map<String, Integer> storage = new HashMap<>();

        for (String order : orders) {
            char[] chars = order.toCharArray();
            Arrays.sort(chars);
            order = new String(chars);

            for (int c : course) {
                generateCombinations(order, c, storage);
            }
        }

        Map<Integer, Integer> maxCount = new HashMap<>();
        for (Map.Entry<String, Integer> entry : storage.entrySet()) {
            String menu = entry.getKey();
            int count = entry.getValue();
            int length = menu.length();

            if (count >= 2) {
                maxCount.put(length, Math.max(maxCount.getOrDefault(length, 0), count));
            }
        }

        List<String> result = new ArrayList<>();
        for (Map.Entry<String, Integer> entry : storage.entrySet()) {
            String menu = entry.getKey();
            int count = entry.getValue();
            int length = menu.length();

            if (maxCount.containsKey(length) && maxCount.get(length) == count) {
                result.add(menu);
            }
        }

        Collections.sort(result);
        return result.toArray(new String[0]);
    }

    private void generateCombinations(String order, int length, Map<String, Integer> storage) {
        generateCombinationsRecursive(order, "", 0, length, storage);
    }

    private void generateCombinationsRecursive(String order, String current, int index, int length, Map<String, Integer> storage) {
        if (current.length() == length) {
            System.out.println(current);
            storage.put(current, storage.getOrDefault(current, 0) + 1);
            return;
        }

        for (int i = index; i < order.length(); i++) {
            generateCombinationsRecursive(order, current + order.charAt(i), i + 1, length, storage);
        }
    }
}