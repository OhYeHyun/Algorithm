const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => +item);

solution(input);

function solution(a) {
  let max = Math.max(...a);
  console.log(max, a.indexOf(max) + 1);
}