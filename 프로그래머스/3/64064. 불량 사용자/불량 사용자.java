import java.util.*;

class Solution {
    List<Set<String>> candidates = new ArrayList<>();
    Set<Set<String>> result = new HashSet<>();
    String[] user_id;
    String[] banned_id;

    public int solution(String[] user_id, String[] banned_id) {
        this.user_id = user_id;
        this.banned_id = banned_id;

        for (String b : banned_id) {
            Set<String> set = new HashSet<>();
            for (String u : user_id) {
                if (match(u, b)) set.add(u);
            }
            candidates.add(set);
        }

        dfs(0, new HashSet<>());

        return result.size();
    }

    private void dfs(int idx, Set<String> cur) {
        if (idx == banned_id.length) {
            result.add(new HashSet<>(cur));
            return;
        }

        for (String user : candidates.get(idx)) {
            if (!cur.contains(user)) {
                cur.add(user);
                dfs(idx + 1, cur);
                cur.remove(user);
            }
        }
    }

    private boolean match(String user, String banned) {
        if (user.length() != banned.length()) return false;
        for (int i = 0; i < user.length(); i++) {
            if (banned.charAt(i) != '*' && user.charAt(i) != banned.charAt(i))
                return false;
        }
        return true;
    }
}