import java.util.*;

class Solution {
    boolean[] visited;
    String[] answer;
    boolean finished = false;

    public String[] solution(String[][] tickets) {
        int n = tickets.length;
        visited = new boolean[n];

        Arrays.sort(tickets, (a, b) -> {
            if (a[0].equals(b[0])) return a[1].compareTo(b[1]);
            return a[0].compareTo(b[0]);
        });

        List<String> route = new ArrayList<>();
        route.add("ICN");

        dfs("ICN", tickets, route, 0);

        return answer;
    }

    private void dfs(String cur, String[][] tickets, List<String> route, int used) {
        if (finished) return;

        if (used == tickets.length) {
            answer = route.toArray(new String[0]);
            finished = true;
            return;
        }

        for (int i = 0; i < tickets.length; i++) {
            if (!visited[i] && tickets[i][0].equals(cur)) {
                visited[i] = true;
                route.add(tickets[i][1]);

                dfs(tickets[i][1], tickets, route, used + 1);

                visited[i] = false;
                route.remove(route.size() - 1);
            }
        }
    }
}
