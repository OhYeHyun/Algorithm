const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => +item);

solution(input);

function solution(num) {
  const set = new Set();
  for (let i = 0; i < num.length; i++) {
    set.add(num[i] % 42);
  }
  console.log(set.size);
}