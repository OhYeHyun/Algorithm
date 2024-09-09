import java.util.*;
import java.util.regex.*;

public class Solution {
    public String[] solution(String[] files) {
        Arrays.sort(files, new FileComparator());
        return files;
    }

    private static class FileComparator implements Comparator<String> {
        @Override
        public int compare(String a, String b) {
            FileName aFile = parseFileName(a);
            FileName bFile = parseFileName(b);

            int headComparison = aFile.head.compareToIgnoreCase(bFile.head);
            if (headComparison != 0) {
                return headComparison;
            }
            return Integer.compare(aFile.number, bFile.number);
        }
    }

    private static FileName parseFileName(String file) {
        Pattern pattern = Pattern.compile("^([\\D]+)(\\d{1,5})");
        Matcher matcher = pattern.matcher(file);

        if (matcher.find()) {
            String head = matcher.group(1);
            int number = Integer.parseInt(matcher.group(2));
            return new FileName(head, number);
        }

        return new FileName("", 0);
    }

    private static class FileName {
        String head;
        int number;

        FileName(String head, int number) {
            this.head = head;
            this.number = number;
        }
    }
}