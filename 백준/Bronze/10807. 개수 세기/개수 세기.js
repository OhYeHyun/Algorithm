const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(
  +input[0],
  input[1].split(" ").map((item) => +item),
  +input[2]
);

function solution(n, arr, num) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    arr[i] === num ? count++ : count;
  }
  console.log(count);
}