const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./b11000/input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const len = input.shift();
let arr = [];

input.forEach((e) => {
  arr.push(e.split(" ").map(Number));
});
solution(arr);

function solution(arr) {
  const study = [];

  for (let i = 0; i < len; i++) {
    const [start, end] = arr[i];
    study.push([start, 1]);
    study.push([end, -1]);
  }

  study.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let answer = 0;
  let room = 0;

  for (let i = 0; i < study.length; i++) {
    room += study[i][1];
    answer = Math.max(answer, room);
  }
  console.log(answer);
}