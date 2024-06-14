const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./b8911/input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let arr = [];
input.forEach((e) => {
  arr.push(e);
});
solution(arr);

function solution(a) {
  let len = +a.shift();
  // prettier-ignore
  const dir = [[0, 1], [-1, 0], [0, -1], [1, 0]];

  for (let i = 0; i < len; i++) {
    let answer = 0;
    let [maxX, minX, maxY, minY] = [0, 0, 0, 0];
    let [dirIdx, [x, y]] = [0, [0, 0]];
    let str = a[i];
    for (let j = 0; j < str.length; j++) {
      switch (str[j]) {
        case "F":
          [x, y] = [x, y].map((e, idx) => e + dir[dirIdx][idx]);
          maxX = Math.max(maxX, x);
          minX = Math.min(minX, x);
          maxY = Math.max(maxY, y);
          minY = Math.min(minY, y);
          break;
        case "B":
          [x, y] = [x, y].map((e, idx) => e - dir[dirIdx][idx]);
          maxX = Math.max(maxX, x);
          minX = Math.min(minX, x);
          maxY = Math.max(maxY, y);
          minY = Math.min(minY, y);
          break;
        case "L":
          dirIdx === 3 ? (dirIdx = 0) : (dirIdx += 1);
          break;
        case "R":
          dirIdx === 0 ? (dirIdx = 3) : (dirIdx -= 1);
          break;
      }
    }
    console.log((maxX - minX) * (maxY - minY));
  }
}