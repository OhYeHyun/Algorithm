import java.util.*;

public class Solution {
    public static List<Long> solution(long[] numbers) {
        List<Long> result = new ArrayList<>();

        for (long number : numbers) {
            StringBuilder binary = new StringBuilder(Long.toBinaryString(number));
            int lastZeroIndex = binary.lastIndexOf("0");

            if (lastZeroIndex == -1) {
                // 모든 비트가 1인 경우 (예: 111 => 1011)
                binary.insert(1, '0');
            } else if (lastZeroIndex == binary.length() - 1) {
                // 마지막 비트가 0인 경우 (예: 100 => 101)
                binary.setCharAt(lastZeroIndex, '1');
            } else {
                // 중간에 0이 있는 경우 (예: 101 => 110)
                binary.setCharAt(lastZeroIndex, '1');
                binary.setCharAt(lastZeroIndex + 1, '0');
            }

            result.add(Long.parseLong(binary.toString(), 2));
        }

        return result;
    }
}