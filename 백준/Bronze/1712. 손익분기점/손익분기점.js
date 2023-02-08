const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/ |\n/);

solution(input[0] * 1, input[1] * 1, input[2] * 1);

function solution(a, b, c) {
  console.log(c <= b ? -1 : Math.floor(a / (c - b)) + 1);
}