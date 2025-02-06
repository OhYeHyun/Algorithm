import java.util.*;

class Solution {
    public String solution(String p) {
        return transform(p);
    }

    private String transform(String str) {
        if (str.isEmpty()) {
            return "";
        }

        String[] divided = divide(str);
        String u = divided[0];
        String v = divided[1];

        if (isCorrect(u)) {
            return u + transform(v);
        } else {
            return "(" + transform(v) + ")" + reverse(u.substring(1, u.length() - 1));
        }
    }

    private String[] divide(String str) {
        int balance = 0;
        for (int i = 0; i < str.length(); i++) {
            balance += (str.charAt(i) == '(') ? 1 : -1;
            if (balance == 0) {
                return new String[]{str.substring(0, i + 1), str.substring(i + 1)};
            }
        }
        return new String[]{str, ""};
    }

    private boolean isCorrect(String str) {
        int balance = 0;
        for (char ch : str.toCharArray()) {
            balance += (ch == '(') ? 1 : -1;
            if (balance < 0) {
                return false;
            }
        }
        return balance == 0;
    }

    private String reverse(String str) {
        StringBuilder sb = new StringBuilder();
        for (char ch : str.toCharArray()) {
            sb.append(ch == '(' ? ')' : '(');
        }
        return sb.toString();
    }
}
