function solution(land) {
    let answer = [...land[0]];

    for (let i = 1; i < land.length; i++) {
        let temp = new Array(4);

        for (let j = 0; j < 4; j++) {
            temp[j] = land[i][j] + Math.max(
                answer[(j + 1) % 4],
                answer[(j + 2) % 4],
                answer[(j + 3) % 4]
            );
        }
        answer = temp;
    }

    return Math.max(...answer);
}