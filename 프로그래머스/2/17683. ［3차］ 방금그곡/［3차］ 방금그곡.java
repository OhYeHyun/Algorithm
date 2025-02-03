import java.util.*;

class Solution {
    public String solution(String m, String[] musicinfos) {
        String answer = "(None)";
        int maxDuration = 0;
                
        for (String musicinfo : musicinfos) {
            String[] mm = musicinfo.split(",");
            int duration = calculateDuration(mm[0], mm[1]);
            String played = playedMusic(duration, mm[3]);
            
           if (isMatch(played, m) && duration > maxDuration) {
                maxDuration = duration;
                answer = mm[2];
            }
        }
        
        return answer;
    }
    
    private boolean isMatch(String played, String m) {
        int pLen = played.length();
        int mLen = m.length();

        for (int i = 0; i <= pLen - mLen; i++) {
            if (played.startsWith(m, i)) {
                if (i + mLen < pLen && played.charAt(i + mLen) == '#') {
                    continue;
                }
                return true;
            }
        }
        return false;
    }
    
    private int calculateDuration(String start, String end) {
        String[] startTime = start.split(":");
        String[] endTime = end.split(":");

        int startMin = Integer.parseInt(startTime[0]) * 60 + Integer.parseInt(startTime[1]);
        int endMin = Integer.parseInt(endTime[0]) * 60 + Integer.parseInt(endTime[1]);
        
        return endMin - startMin;
    }
    
    private String playedMusic(int duration, String music) {
        StringBuilder played = new StringBuilder();
        int idx = 0;
        int len = music.length();
        
        while (duration > 0) {            
            played.append(music.charAt(idx));
            
            if (idx + 1 < len && music.charAt(idx + 1) == '#') {
                played.append('#');
                idx++;
            }

            idx = (idx + 1) % len;
            duration--;
        }
        
        return played.toString();
    }
}