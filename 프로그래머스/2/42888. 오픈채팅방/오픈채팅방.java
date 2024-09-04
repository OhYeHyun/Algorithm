import java.util.*;

public class Solution {
    public String[] solution(String[] record) {
        List<String> answer = new ArrayList<>();
        Map<String, String> userMap = new HashMap<>();

        for (String message : record) {
            String[] components = message.split(" ");
            String command = components[0];
            String id = components[1];

            if (command.equals("Enter") || command.equals("Change")) {
                String name = components[2];
                userMap.put(id, name);
            }
        }

        for (String message : record) {
            String[] components = message.split(" ");
            String command = components[0];
            String id = components[1];

            if (command.equals("Enter")) {
                answer.add(userMap.get(id) + "님이 들어왔습니다.");
            } else if (command.equals("Leave")) {
                answer.add(userMap.get(id) + "님이 나갔습니다.");
            }
        }

        return answer.toArray(new String[0]);
    }
}