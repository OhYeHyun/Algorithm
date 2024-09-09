import java.util.*;
import java.util.regex.*;

public class Solution {
    public String[] solution(String[] files) {
        Pattern p = Pattern.compile("^([\\D]+)(\\d{1,5})");
        
        Arrays.sort(files, new Comparator<String>() {
            @Override
            public int compare(String a, String b) {
                Matcher mA = p.matcher(a.toLowerCase());
                Matcher mB = p.matcher(b.toLowerCase());

                mA.find();
                mB.find();

                if (!mA.group(1).equals(mB.group(1))) {
                    return mA.group(1).compareTo(mB.group(1));
                } else {
                    return Integer.parseInt(mA.group(2)) - Integer.parseInt(mB.group(2));
                }
            }
        });
        return files;
    }
}