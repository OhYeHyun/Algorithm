import java.util.*;

class Solution {
    public long solution(String expression) {
        long answer = 0;
        List<String[]> orders = generateOrder();
        List<String> list = makeList(expression);

        for (String[] order : orders) {
            List<String> copyList = new ArrayList<>(list);
            long result = Long.parseLong(calculate(order, copyList));
            if (result < 0) {
                result *= -1;
            }
            answer = Math.max(answer, result);
        }
            
        return answer;
    }
    
    private String calculate(String[] signs, List<String> list) {
        for (String sign : signs) {
            while (list.contains(sign)) {
                int idx = list.indexOf(sign);
                String result = calculateSign(list.get(idx - 1), list.get(idx + 1), list.get(idx));
                
                list.set(idx, result);
                list.remove(idx + 1);
                list.remove(idx - 1);                
            }
        }
        return list.get(0);
    }
    
    private List<String> makeList(String expression) {                  
        List<String> list = new ArrayList<>();
        
        StringBuilder number = new StringBuilder();
        for (char ch : expression.toCharArray()) {
            if (ch == '+' || ch == '-' || ch == '*') {
                list.add(number.toString());
                list.add(Character.toString(ch));
                number.setLength(0);
            } else {
                number.append(ch);
            }
        }
        list.add(number.toString());

        return list;
    }
    
    private List<String[]> generateOrder() {
        List<String[]> orders = new ArrayList<>();
        orders.add(new String[]{"+", "-", "*"});
        orders.add(new String[]{"+", "*", "-"});
        orders.add(new String[]{"-", "+", "*"});
        orders.add(new String[]{"-", "*", "+"});
        orders.add(new String[]{"*", "-", "+"});
        orders.add(new String[]{"*", "+", "-"});
        
        return orders;
    }
    
    private String calculateSign(String first, String second, String sign) {
        long f = Long.parseLong(first);
        long s = Long.parseLong(second);
        
        if (sign.equals("+")) {
            return Long.toString(f + s);
        }
        
        if (sign.equals("-"))  {
            return Long.toString(f - s);
        }
        
        if (sign.equals("*"))  {
            return Long.toString(f * s);
        }
        
        return "0";
    }
    
}