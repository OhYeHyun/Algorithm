const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(/,| |\n/)
  .map(Number);

solution(input);

function solution(a) {
  console.log(a.reduce((a, b) => a + b));
}