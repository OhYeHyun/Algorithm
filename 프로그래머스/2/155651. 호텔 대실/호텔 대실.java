import java.util.*;

class Solution {
    public int solution(String[][] book_time) {
        ArrayList<Integer> empty = new ArrayList<>();
        empty.add(0);
        
        Arrays.sort(book_time, new Comparator<String[]>() {
            @Override
            public int compare(String[] a, String[] b) {
                return a[0].compareTo(b[0]);
            }
        });
        
        for (int i = 0; i < book_time.length; i++) {
            int start = convert(book_time[i][0]);
            int end = convert(book_time[i][1]);
            
            boolean assign = false;
            for (int j = 0; j < empty.size(); j++) {
                int emptyTime = empty.get(j);
                
                if (emptyTime <= start) {
                    empty.set(j, end + 10);
                    assign = true;
                    break;
                }
            }
            if (!assign) {
                empty.add(end + 10);
            }
        }     
        
        return empty.size();
    }
    
    public int convert(String time) {
        int hour = Integer.parseInt(time.split(":")[0]);
        int min = Integer.parseInt(time.split(":")[1]);
        
        return hour * 60 + min;
    }
}