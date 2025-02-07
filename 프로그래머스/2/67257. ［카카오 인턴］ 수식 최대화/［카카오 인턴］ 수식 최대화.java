import java.util.*;

class Solution {
    public long solution(String expression) {
        long answer = 0;
        List<String[]> orders = generateOrder();
        List<String> expressions = parseExpression(expression);

        for (String[] order : orders) {
            List<String> copyExpressions = new ArrayList<>(expressions);
            long result = Long.parseLong(evaluateExpression(order, copyExpressions));
            answer = Math.max(answer, Math.abs(result));
        }
            
        return answer;
    }
    
    private String evaluateExpression(String[] operators, List<String> expressions) {
        for (String operator : operators) {
            while (expressions.contains(operator)) {
                int idx = expressions.indexOf(operator);
                String result = applyOperation(expressions.get(idx - 1), expressions.get(idx + 1), expressions.get(idx));
                
                expressions.set(idx, result);
                expressions.remove(idx + 1);
                expressions.remove(idx - 1);                
            }
        }
        return expressions.get(0);
    }
    
    private List<String> parseExpression(String expression) {                  
        List<String> expressions = new ArrayList<>();
        
        StringBuilder number = new StringBuilder();
        for (char ch : expression.toCharArray()) {
            if (ch == '+' || ch == '-' || ch == '*') {
                expressions.add(number.toString());
                expressions.add(Character.toString(ch));
                number.setLength(0);
            } else {
                number.append(ch);
            }
        }
        expressions.add(number.toString());

        return expressions;
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
    
    private String applyOperation(String first, String second, String operator) {
        long num1 = Long.parseLong(first);
        long num2 = Long.parseLong(second);
        
        if (operator.equals("+")) {
            return Long.toString(num1 + num2);
        }
        
        if (operator.equals("-"))  {
            return Long.toString(num1 - num2);
        }
        
        if (operator.equals("*"))  {
            return Long.toString(num1 * num2);
        }
        
        return "0";
    }
    
}