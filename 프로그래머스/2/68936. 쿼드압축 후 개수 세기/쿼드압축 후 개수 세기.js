function solution(arr) {
    const answer = [0, 0];

    const dfs = (size, subArray) => {
        const firstElement = subArray[0][0];
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                if (subArray[row][col] !== firstElement) {
                    const [topLeft, topRight, bottomLeft, bottomRight] = divideArray(size, subArray);
                    
                    dfs(size / 2, topLeft);
                    dfs(size / 2, topRight);
                    dfs(size / 2, bottomLeft);
                    dfs(size / 2, bottomRight);
                    return;
                }
            }
        }
        answer[firstElement]++;
    };

    function divideArray(size, array) {
        const half = size / 2;
        const topLeft = [], topRight = [], bottomLeft = [], bottomRight = [];

        for (let row = 0; row < size; row++) {
            if (row < half) {
                topLeft.push(array[row].slice(0, half));
                topRight.push(array[row].slice(half));
            } else {
                bottomLeft.push(array[row].slice(0, half));
                bottomRight.push(array[row].slice(half));
            }
        }

        return [topLeft, topRight, bottomLeft, bottomRight];
    }

    dfs(arr.length, arr);
    return answer;
}