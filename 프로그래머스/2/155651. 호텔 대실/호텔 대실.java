import java.util.*;

class Solution {
    public int solution(String[][] book_time) {
        PriorityQueue<Integer> room = new PriorityQueue<>();

        Arrays.sort(book_time, (a, b) -> a[0].compareTo(b[0]));
        
        for (String[] time : book_time) {
            int start = convert(time[0]);
            int end = convert(time[1]);
            
            if (!room.isEmpty() && room.peek() <= start) {
                room.poll();
            }
            room.offer(end + 10);
        }     
        
        return room.size();
    }
    
    public int convert(String time) {
        int hour = Integer.parseInt(time.split(":")[0]);
        int min = Integer.parseInt(time.split(":")[1]);
        
        return hour * 60 + min;
    }
}