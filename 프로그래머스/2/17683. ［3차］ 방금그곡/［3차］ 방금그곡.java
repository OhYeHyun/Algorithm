import java.util.*;

class Solution {
    public String solution(String m, String[] musicinfos) {
        String answer = "(None)";
        int maxDuration = 0;
                
        for (String musicinfo : musicinfos) {
            String[] mm = musicinfo.split(",");
            int duration = calculateDuration(mm[0], mm[1]);
            String played = playedMusic(duration, mm[3]);
            
            if (isMatch(played, m)) {
                if (duration > maxDuration) {
                    maxDuration = duration;
                    answer = mm[2];
                }
            }
        }
        
        return answer;
    }
    
    private boolean isMatch(String played, String m) {
        int pLen = played.length();
        int mLen = m.length();

        for (int i = 0; i <= pLen - mLen; i++) {
            if (played.substring(i, i + mLen).equals(m)) {
                if (i + mLen < pLen && played.charAt(i + mLen) == '#') {
                    continue;
                }
                return true;
            }
        }
        return false;
    }
    
    private int calculateDuration(String start, String end) {
        int startH = Integer.parseInt(start.split(":")[0]);
        int startM = Integer.parseInt(start.split(":")[1]);
        int endH = Integer.parseInt(end.split(":")[0]);
        int endM = Integer.parseInt(end.split(":")[1]);
        
        return endH * 60 + endM - (startH * 60 + startM);
    }
    
    private String playedMusic(int duration, String music) {
        int idx = 0;
        String played = "";
        
        while (duration > 0) {
            String target = Character.toString(music.charAt(idx));
            played += target;
            
            idx = (idx + 1) % music.length();
            
            if (music.charAt(idx) == '#') {
                played += "#";
                idx = (idx + 1) % music.length();
            }
            
            duration--;
        }
        
        return played;
    }
}