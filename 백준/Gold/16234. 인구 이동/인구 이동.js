const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./b16234/input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [len, start, end] = input.shift().split(" ").map(Number);
const nations = [];

input.forEach((e) => {
  nations.push(e.split(" ").map(Number));
});
solution(nations);

function solution(nations) {
  let answer = 0;
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (true) {
    let boolean = false;
    const visited = Array.from({ length: len }, () => Array(len).fill(false));

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (!visited[i][j]) {
          const queue = [[i, j]];
          const unionNation = [];
          let front = 0;
          let sumPopulation = 0;

          while (queue.length > front) {
            const [curY, curX] = queue[front++];

            if (!visited[curY][curX]) {
              visited[curY][curX] = true;
              unionNation.push([curY, curX]);
              sumPopulation += nations[curY][curX];

              for (let [dy, dx] of dir) {
                const newY = curY + dy;
                const newX = curX + dx;

                if (
                  newY >= 0 &&
                  newY < len &&
                  newX >= 0 &&
                  newX < len &&
                  !visited[newY][newX]
                ) {
                  const diff = Math.abs(
                    nations[curY][curX] - nations[newY][newX]
                  );
                  if (start <= diff && diff <= end) {
                    queue.push([newY, newX]);
                  }
                }
              }
            }
          }

          if (unionNation.length > 1) {
            boolean = true;
            const changePopulation = Math.floor(
              sumPopulation / unionNation.length
            );
            for (let [y, x] of unionNation) {
              nations[y][x] = changePopulation;
            }
          }
        }
      }
    }

    if (!boolean) break;
    answer++;
  }

  console.log(answer);
}
