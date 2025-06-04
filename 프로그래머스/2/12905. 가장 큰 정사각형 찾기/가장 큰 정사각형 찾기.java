class Solution {

    public int solution(int[][] board) {
        int y = board.length;
        int x = board[0].length;

        if (y == 1) {
            for (int i = 0; i < x; i++) {
                if (board[0][i] == 1) return 1;
            }
            return 0;
        }

        if (x == 1) {
            for (int i = 0; i < y; i++) {
                if (board[i][0] == 1) return 1;
            }
            return 0;
        }

        int max = 0;
        for (int i = 1; i < y; i++) {
            for (int j = 1; j < x; j++) {
                if (board[i][j] == 1) {
                    board[i][j] = Math.min(board[i - 1][j - 1], Math.min(board[i - 1][j], board[i][j - 1])) + 1;
                    max = Math.max(max, board[i][j]);
                }
            }
        }

        return max * max;
    }
}