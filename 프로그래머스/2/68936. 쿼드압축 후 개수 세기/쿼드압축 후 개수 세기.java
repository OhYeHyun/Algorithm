public class Solution {
    public int[] solution(int[][] arr) {
        dfs(arr.length, arr);
        return answer;
    }
    
    int[] answer = {0, 0};

    public void dfs(int size, int[][] subArray) {
        int firstElement = subArray[0][0];
        for (int row = 0; row < size; row++) {
            for (int col = 0; col < size; col++) {
                if (subArray[row][col] != firstElement) {
                    int[][][] dividedArrays = divideArray(size, subArray);
                    int[][] topLeft = dividedArrays[0];
                    int[][] topRight = dividedArrays[1];
                    int[][] bottomLeft = dividedArrays[2];
                    int[][] bottomRight = dividedArrays[3];

                    dfs(size / 2, topLeft);
                    dfs(size / 2, topRight);
                    dfs(size / 2, bottomLeft);
                    dfs(size / 2, bottomRight);
                    return;
                }
            }
        }
        answer[firstElement]++;
    }

    public int[][][] divideArray(int size, int[][] array) {
        int half = size / 2;
        int[][] topLeft = new int[half][half];
        int[][] topRight = new int[half][half];
        int[][] bottomLeft = new int[half][half];
        int[][] bottomRight = new int[half][half];

        for (int row = 0; row < size; row++) {
            if (row < half) {
                System.arraycopy(array[row], 0, topLeft[row], 0, half);
                System.arraycopy(array[row], half, topRight[row], 0, half);
            } else {
                System.arraycopy(array[row], 0, bottomLeft[row - half], 0, half);
                System.arraycopy(array[row], half, bottomRight[row - half], 0, half);
            }
        }

        return new int[][][]{topLeft, topRight, bottomLeft, bottomRight};
    }
}
