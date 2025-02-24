import java.util.*;
import java.util.stream.Collectors;

class Solution {
    public int solution(int[] players, int m, int k) {
        int answer = 0;
        List<int[]> servers = new ArrayList<>();
        int curServer = 0;
        
        for (int player : players) {
            int targetServer = player / m;
            
            if (targetServer > curServer) {
                int newServers = targetServer - curServer;
                servers.add(new int[]{newServers, k});
                answer += newServers;
                curServer += newServers;
            }
            
            List<int[]> updatedServers = new ArrayList<>();
            for (int[] server : servers) {
                server[1]--;
                if (server[1] > 0) {
                    updatedServers.add(server);
                } else {
                    curServer -= server[0];
                }
            }
            
            servers = updatedServers;
        }  
        
        return answer;
    }
}